import { memo } from "react";
import styled, { css, keyframes } from "styled-components";
import sizes from "../../../shared/sizes";

const Viewport = ({ screenWidth }) => {
  return (
    <StyledViewport screenWidth={screenWidth}>
      <HGroup>
        <Title>Moaaz Bhnas</Title>
        <SubTitle>React.js developer</SubTitle>
      </HGroup>
    </StyledViewport>
  );
};

const screenHeight = (width) => width * 0.6;
const screenFrame = (screenWidth) => screenWidth * 0.125;

const turnOn = keyframes`
  0% {
    opacity: 0;
  }
`;

const StyledViewport = styled.div`
  padding: 0.5em 0.75em;
  margin: auto;
  width: ${({ screenWidth }) => `${screenWidth - screenFrame(screenWidth)}em`};
  height: ${({ screenWidth }) =>
    `${screenHeight(screenWidth) - screenFrame(screenWidth)}em`};
  background: #fff;
  background-size: 5em 5em;
  box-shadow: inset 0 0 20px 3px rgba(0, 0, 0, 0.5);
  border: ${({ theme }) =>
    `${sizes.border.default} solid ${theme.border.laptop}`};
  display: flex;
  flex-direction: column;

  animation: ${turnOn} 0s backwards 2s;
`;

const titleStyles = css`
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
`;

const HGroup = styled.hgroup``;

const Title = styled.h2`
  ${titleStyles}
`;

const SubTitle = styled.h3`
  ${titleStyles}
`;

export default memo(Viewport);
