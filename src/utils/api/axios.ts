import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Cookies } from 'react-cookie';
import { ReissueToken } from './user';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

const cookie = new Cookies();

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookie.get('access_token');
    accessToken && (config.headers!['Authorization'] = `Bearer ${accessToken}`);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const {
        config,
        response: { status },
      } = error;
      if (status === 401) {
        const originalRequest = config;
        const refreshToken = await cookie.get('refresh_token');
        cookie.remove('access_token');

        if (refreshToken) {
          ReissueToken(refreshToken)
            .then((res) => {
              cookie.set('access_token', res.access_token);
              cookie.set('refresh_token', res.refresh_token);
              if (originalRequest?.headers) originalRequest.headers['Authorization'] = `Bearer ${res.access_token}`;
              return axios(originalRequest as AxiosRequestConfig);
            })
            .catch(() => {
              cookie.remove('access_token');
              cookie.remove('refresh_token');
              window.location.href = 'https://auth.entrydsm.hs.kr/login';
            });
        } else {
          window.location.href = 'https://auth.entrydsm.hs.kr/login';
        }
      } else return Promise.reject(error);
    }
  },
);
