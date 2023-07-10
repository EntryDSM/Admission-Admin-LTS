import { Icon, Button, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import React, { useState } from 'react';

const PageNation = () => {
  const [hover, setHover] = useState({ left: false, right: false });
  const [current, setCurrent] = useState(0);

  return (
    <_Buttons>
      <_Button
        onMouseOver={() =>
          setHover((prev) => {
            return { ...prev, left: true };
          })
        }
        onMouseOut={() =>
          setHover((prev) => {
            return { ...prev, left: false };
          })
        }
      >
        <Icon color={hover.left ? 'realWhite' : 'green500'} icon="LeftArrow" size={24} />
      </_Button>
      <_Button clicked={current === 0}>1</_Button>
      <_Button
        onMouseOver={() =>
          setHover((prev) => {
            return { ...prev, right: true };
          })
        }
        onMouseOut={() =>
          setHover((prev) => {
            return { ...prev, right: false };
          })
        }
      >
        <Icon color={hover.right ? 'realWhite' : 'green500'} icon="RightArrow" size={24} />
      </_Button>
    </_Buttons>
  );
};

export default PageNation;

const _Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 50px auto 0;
`;

const _Button = styled.div<{ clicked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  border: 1px solid ${theme.color.green500};
  color: ${({ clicked }) => (clicked ? theme.color.realWhite : theme.color.green500)};
  cursor: pointer;
  background-color: ${({ clicked }) => (clicked ? theme.color.green500 : theme.color.realWhite)};
  &:hover {
    color: ${theme.color.realWhite};
    background-color: ${theme.color.green500};
  }
`;
