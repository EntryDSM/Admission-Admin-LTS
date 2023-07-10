import { instance } from '../axios';

export const ReissueToken = async (refresh_token: string) => {
  const response = await instance.put('/user/auth', null, {
    headers: {
      'X-Refresh-Token': `Bearer ${refresh_token}`,
    },
  });
  return response.data;
};
