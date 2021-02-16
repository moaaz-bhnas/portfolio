import { memo } from "react";
import styled, { keyframes } from "styled-components";

const Portrait = ({ width = 14 }) => {
  return (
    <StyledPortrait width={width}>
      <Thread portraitWidth={width} />
      <Thread portraitWidth={width} />
      <Front portraitWidth={width}>
        <Image portraitWidth={width} src="/me.jpg" alt="Moaaz Bhnas" />
      </Front>
      <Back portraitWidth={width} />
      <Top portraitWidth={width} />
      <Bottom portraitWidth={width} />
      <Right portraitWidth={width} />
      <Left portraitWidth={width} />
    </StyledPortrait>
  );
};

const portraitHeight = (width) => width * 0.8;
const portraitDepth = (width) => width / 14;

const fall = keyframes`
  0% {
    transform: translate3d(16em, -50em, -18em);
  }
`;

const StyledPortrait = styled.div`
  display: none;
  position: absolute;
  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${portraitHeight(width)}em`};
  transform-style: preserve-3d;
  transform-origin: 50% -1.75em;
  transform: translate3d(16em, -18em, -18em);
  transition: transform 0.3s;
  animation: ${fall} 0.5s backwards 2.7s;

  &:hover {
    transform: translate3d(16em, -18em, -18em) rotate(6deg);
  }

  @media (min-width: 545px) {
    display: block;
  }
`;

const Thread = styled.div`
  position: absolute;
  width: 0.15em;
  height: 2.5em;
  background-color: #3b2212;
  transform-origin: 0 0;

  &:nth-child(1) {
    transform: ${({ portraitWidth }) =>
      `translate3d(${portraitWidth / 2}em, -1.75em, 0) rotate(45deg)`};
  }

  &:nth-child(2) {
    transform: ${({ portraitWidth }) =>
      `translate3d(${portraitWidth / 2}em, -1.75em, 0) rotate(-45deg)`};
  }
`;

const Face = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.bg.portrait};
`;

const Front = styled(Face)`
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `4px solid ${theme.border.portrait}`};
  display: flex;
  transform: ${({ portraitWidth }) =>
    `translateZ(${portraitDepth(portraitWidth) / 2}em)`};
`;

const Image = styled.img`
  width: ${({ portraitWidth }) => `${portraitWidth * 0.86}em`};
  height: ${({ portraitWidth }) => `${portraitWidth * 0.64}em`};
  object-fit: cover;
  object-position: 50% 30%;
  background-color: #fff;
  box-shadow: inset 0 0 20px 0.5px rgba(0, 0, 0, 0.5);
  margin: auto;
`;

const Back = styled(Face)`
  width: 100%;
  height: 100%;
  transform: ${({ portraitWidth }) =>
    `rotateY(180deg) translateZ(${portraitDepth(portraitWidth) / 2}em)`};
`;

const Top = styled(Face)`
  width: 100%;
  height: ${({ portraitWidth }) => `${portraitDepth(portraitWidth)}em`};
  transform: ${({ portraitWidth }) =>
    `rotateX(90deg) translateZ(${portraitDepth(portraitWidth) / 2}em)`};
`;

const Bottom = styled(Face)`
  width: 100%;
  height: ${({ portraitWidth }) => `${portraitDepth(portraitWidth)}em`};
  transform: ${({ portraitWidth }) =>
    `rotateX(-90deg) translateZ(${
      portraitHeight(portraitWidth) - portraitDepth(portraitWidth) / 2
    }em)`};
`;

const Right = styled(Face)`
  width: ${({ portraitWidth }) => `${portraitDepth(portraitWidth)}em`};
  height: 100%;
  transform: ${({ portraitWidth }) =>
    `rotateY(90deg) translateZ(${
      portraitWidth - portraitDepth(portraitWidth) / 2
    }em)`};
`;

const Left = styled(Face)`
  width: ${({ portraitWidth }) => `${portraitDepth(portraitWidth)}em`};
  height: 100%;
  transform: ${({ portraitWidth }) =>
    `rotateY(-90deg) translateZ(${portraitDepth(portraitWidth) / 2}em)`};
`;

export default memo(Portrait);
