import { memo } from "react";
import styled, { keyframes } from "styled-components";
import sizes from "../../shared/sizes";

const Desk = ({ width = 40 }) => {
  return (
    <StyledDesk width={width}>
      <Front deskWidth={width} />
      <Back deskWidth={width} />
      <Top deskWidth={width} />
      <Bottom deskWidth={width} />
      <Right deskWidth={width} />
      <Left deskWidth={width} />
    </StyledDesk>
  );
};

// Get height and depth from width
const deskHeight = (width) => width / 2;
const deskDepth = (width) => width / 20;

const slide = keyframes`
  0% {
    transform: rotateX(90deg) translateY(32em);
  }
`;

const StyledDesk = styled.div`
  position: relative;

  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${deskHeight(width)}em`};

  transform-style: preserve-3d;
  transform: rotateX(90deg) translateY(0);

  animation: ${slide} 0.6s cubic-bezier(0.48, 1.46, 0.68, 1) backwards;
`;

const Face = styled.div`
  position: absolute;

  background-color: ${({ theme }) => theme.bg.desk};
  border: ${({ theme }) =>
    `${sizes.border.default} solid ${theme.border.desk}`};
`;

const Front = styled(Face)`
  width: 100%;
  height: 100%;

  transform: ${({ deskWidth }) => `translateZ(${deskDepth(deskWidth) / 2}em)`};
`;

const Back = styled(Face)`
  width: 100%;
  height: 100%;

  transform: ${({ deskWidth }) =>
    `rotateY(180deg) translateZ(${deskDepth(deskWidth) / 2}em)`};
`;

const Top = styled(Face)`
  width: 100%;
  height: ${({ deskWidth }) => `${deskDepth(deskWidth)}em`};

  transform: ${({ deskWidth }) =>
    `rotateX(90deg) translateZ(${deskDepth(deskWidth) / 2}em)`};
`;

const Bottom = styled(Face)`
  width: 100%;
  height: ${({ deskWidth }) => `${deskDepth(deskWidth)}em`};

  transform: ${({ deskWidth }) =>
    `rotateX(-90deg) translateZ(${
      deskHeight(deskWidth) - deskDepth(deskWidth) / 2
    }em)`};
`;

const Right = styled(Face)`
  width: ${({ deskWidth }) => `${deskDepth(deskWidth)}em`};
  height: 100%;

  transform: ${({ deskWidth }) =>
    `rotateY(90deg) translateZ(${deskWidth - deskDepth(deskWidth) / 2}em)`};
`;

const Left = styled(Face)`
  width: ${({ deskWidth }) => `${deskDepth(deskWidth)}em`};
  height: 100%;

  transform: ${({ deskWidth }) =>
    `rotateY(-90deg) translateZ(${deskDepth(deskWidth) / 2}em)`};
`;

export default memo(Desk);
