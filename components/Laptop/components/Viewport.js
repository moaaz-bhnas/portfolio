import { memo } from "react";
import styled, { keyframes } from "styled-components";
import sizes from "../../../shared/sizes";

const Viewport = ({ screenWidth }) => {
  return (
    <StyledViewport screenWidth={screenWidth}>
      <P>Check my projects ..</P>
      <Link href="https://github.com/moaaz-bhnas">
        <Image src="/github.svg" alt="GitHub" />
      </Link>
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
  padding: 0.8em 1em;
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

const P = styled.p`
  margin: 0 0 0.7em 0;
`;

const Link = styled.a`
  align-self: flex-end;
`;

const Image = styled.img`
  width: 3em;
  margin-right: 1em;
`;

export default memo(Viewport);
