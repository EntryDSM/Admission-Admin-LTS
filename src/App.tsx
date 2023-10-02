import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';

function App() {
  const cookie = new Cookies();
  const accessToken = cookie.get('access_token');
  const refreshToken = cookie.get('refresh_token');
  const authority = cookie.get('authority');
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      alert('로그인 후 이용 가능합니다');
      window.location.href = 'https://auth.entrydsm.hs.kr/admin-login?redirect_url=https://admin.entrydsm.hs.kr';
    }
    if (authority != 'admin') {
      alert('권한이 없습니다.');
      window.location.href = 'https://auth.entrydsm.hs.kr/admin-login?redirect_url=https://admin.entrydsm.hs.kr';
    }
  }, [accessToken, refreshToken, authority]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
