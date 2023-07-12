import * as _ from './style';
import { Link } from 'react-router-dom';
import { Button, Text, Icon, theme, Stack } from '@team-entry/design_system';
import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

type THeader = '전형 일정 수정' | '접수 현황' | '정원 수정' | '지원자 목록' | '';

interface IHeaderList {
  name: THeader;
  url: string;
  type?: 'login' | 'logout' | 'total';
}

const headerList: IHeaderList[] = [
  // { name: '전형 일정 수정', url: '/screenSchedule' },
  { name: '접수 현황', url: '/receptionStatus' },
  { name: '정원 수정', url: '/limit' },
  { name: '지원자 목록', url: '/applicantsList' },
];

const Header = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const location = useLocation();

  return (
    <>
      <_._HeaderContainer>
        <Stack align="center">
          <Link onClick={() => setVisibility(false)} to="/">
            <Stack>
              <img src={Logo} alt="" style={{ marginRight: 12, cursor: 'pointer' }} />
              <Text color="realBlack" size="title1">
                EntryDSM 입학전형
              </Text>
            </Stack>
          </Link>
          <_._Texts>
            {headerList.map((res, idx) => {
              const { name, url } = res;
              return (
                <Link key={idx} to={url}>
                  <Text color={location.pathname.includes(url) ? 'green500' : 'black700'} size="body2">
                    {name}
                  </Text>
                </Link>
              );
            })}
          </_._Texts>
        </Stack>
        <Stack align="center">
          <Text cursor="pointer" color="realblack" size="body1" margin={[0, 4, 0, 20]}>
            어드민
          </Text>
          <Icon cursor="pointer" icon="DownArrow" color="black500" />
        </Stack>
      </_._HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
