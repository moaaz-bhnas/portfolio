import { memo } from "react";
import styled from "styled-components";
import sizes from "../../../shared/sizes";
import { keyStyles } from "../style";
import KeysGrid from "./KeysGrid";

const Keyboard = ({ width = 16 }) => {
  return (
    <StyledKeyboard width={width}>
      <Front keyboardWidth={width}>
        <PowerKey />
        <KeysGrid keyboardWidth={width} />
      </Front>
      <Back keyboardWidth={width} />
      <Top keyboardWidth={width} />
      <Bottom keyboardWidth={width} />
      <Right keyboardWidth={width} />
      <Left keyboardWidth={width} />
    </StyledKeyboard>
  );
};

// Get height and depth from width
const keyboardHeight = (width) => width * 0.6;
const keyboardDepth = (width) => width * 0.05;

const StyledKeyboard = styled.div`
  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${keyboardHeight(width)}em`};
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(90deg) translate3d(0, 5.2em, -5.2em);
`;

const Face = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.bg.laptop};
  border: ${({ theme }) =>
    `${sizes.border.default} solid ${theme.border.laptop}`};
`;

const Front = styled(Face)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: ${({ keyboardWidth }) =>
    `translateZ(${keyboardDepth(keyboardWidth) / 2}em)`};
`;

const Back = styled(Face)`
  width: 100%;
  height: 100%;
  transform: ${({ keyboardWidth }) =>
    `rotateY(180deg) translateZ(${keyboardDepth(keyboardWidth) / 2}em)`};
`;

const Top = styled(Face)`
  width: 100%;
  height: ${({ keyboardWidth }) => `${keyboardDepth(keyboardWidth)}em`};
  transform: ${({ keyboardWidth }) =>
    `rotateX(90deg) translateZ(${keyboardDepth(keyboardWidth) / 2}em)`};
`;

const Bottom = styled(Face)`
  width: 100%;
  height: ${({ keyboardWidth }) => `${keyboardDepth(keyboardWidth)}em`};
  transform: ${({ keyboardWidth }) =>
    `rotateX(-90deg) translateZ(${
      keyboardHeight(keyboardWidth) - keyboardDepth(keyboardWidth) / 2
    }em)`};
`;

const Right = styled(Face)`
  width: ${({ keyboardWidth }) => `${keyboardDepth(keyboardWidth)}em`};
  height: 100%;
  transform: ${({ keyboardWidth }) =>
    `rotateY(90deg) translateZ(${
      keyboardWidth - keyboardDepth(keyboardWidth) / 2
    }em)`};
`;

const Left = styled(Face)`
  width: ${({ keyboardWidth }) => `${keyboardDepth(keyboardWidth)}em`};
  height: 100%;
  transform: ${({ keyboardWidth }) =>
    `rotateY(-90deg) translateZ(${keyboardDepth(keyboardWidth) / 2}em)`};
`;

const PowerKey = styled.div`
  ${keyStyles}
  width: 1.05em;
  height: 1.05em;
  margin: 0.9em 1.5em;
`;

export default memo(Keyboard);
