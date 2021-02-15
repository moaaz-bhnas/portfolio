import { memo } from "react";
import styled from "styled-components";
import sizes from "../../../shared/sizes";

const Screen = ({ width = 16 }) => {
  return (
    <StyledScreen width={width}>
      <Front screenWidth={width}>
        <Viewport screenWidth={width} />
      </Front>
      <Back screenWidth={width} />
      <Top screenWidth={width} />
      <Bottom screenWidth={width} />
      <Right screenWidth={width} />
      <Left screenWidth={width} />
    </StyledScreen>
  );
};

// Get height and depth from width
const screenHeight = (width) => width * 0.6;
const screenDepth = (width) => width * 0.05;

const StyledScreen = styled.div`
  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${screenHeight(width)}em`};
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  transform: rotateX(0) translate3d(0, 0, 0);
  transition: transform 0.4s;

  &:hover {
    transform: rotateX(8deg) translate3d(0, 0, 0);
  }
`;

const Face = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.bg.laptop};
  border: ${({ theme }) =>
    `${sizes.border.default} solid ${theme.border.laptop}`}; ;
`;

const Front = styled(Face)`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${({ screenWidth }) =>
    `translateZ(${screenDepth(screenWidth) / 2}em)`};
`;

const Back = styled(Face)`
  width: 100%;
  height: 100%;
  transform: ${({ screenWidth }) =>
    `rotateY(180deg) translateZ(${screenDepth(screenWidth) / 2}em)`};
`;

const Top = styled(Face)`
  width: 100%;
  height: ${({ screenWidth }) => `${screenDepth(screenWidth)}em`};
  transform: ${({ screenWidth }) =>
    `rotateX(90deg) translateZ(${screenDepth(screenWidth) / 2}em)`};
`;

const Bottom = styled(Face)`
  width: 100%;
  height: ${({ screenWidth }) => `${screenDepth(screenWidth)}em`};
  transform: ${({ screenWidth }) =>
    `rotateX(-90deg) translateZ(${
      screenHeight(screenWidth) - screenDepth(screenWidth) / 2
    }em)`};
`;

const Right = styled(Face)`
  width: ${({ screenWidth }) => `${screenDepth(screenWidth)}em`};
  height: 100%;
  transform: ${({ screenWidth }) =>
    `rotateY(90deg) translateZ(${
      screenWidth - screenDepth(screenWidth) / 2
    }em)`};
`;

const Left = styled(Face)`
  width: ${({ screenWidth }) => `${screenDepth(screenWidth)}em`};
  height: 100%;
  transform: ${({ screenWidth }) =>
    `rotateY(-90deg) translateZ(${screenDepth(screenWidth) / 2}em)`};
`;

const screenFrame = (screenWidth) => screenWidth * 0.125;

const Viewport = styled.div`
  margin: auto;
  width: ${({ screenWidth }) => `${screenWidth - screenFrame(screenWidth)}em`};
  height: ${({ screenWidth }) =>
    `${screenHeight(screenWidth) - screenFrame(screenWidth)}em`};
  /* background: #eee url(images/tag.svg) no-repeat 50% 50%; */
  background-size: 5em 5em;
  box-shadow: inset 0 0 20px 3px rgba(0, 0, 0, 0.5);
  border: ${({ theme }) =>
    `${sizes.border.default} solid ${theme.border.laptop}`};
`;

export default memo(Screen);
