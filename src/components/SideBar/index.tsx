import styled from '@emotion/styled';
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Text } from '@team-entry/design_system';

interface PropsType {
  isOpened: boolean;
  title?: string;
  children: React.ReactNode;
  close: () => void;
}

export function SideBar({ isOpened, title, children, close }: PropsType) {
  return (
    <OutsideClickHandler onOutsideClick={close}>
      <_Wrapper className={isOpened ? 'open' : 'close'}>
        <_EscapeWrapper onClick={close}></_EscapeWrapper>
        <Text color="black900" size="header2">
          {title}
        </Text>
        {children}
      </_Wrapper>
    </OutsideClickHandler>
  );
}

const _Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 40px 40px 75px 40px;
  top: 0;
  right: -700px;
  min-width: 418px;
  background-color: white;
  height: 100vh;
  z-index: 100;
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.16);
  transition: 1.2s;
  &.open {
    right: 0;
  }
`;

const _EscapeWrapper = styled.div`
  height: 24px;
  cursor: pointer;
`;
