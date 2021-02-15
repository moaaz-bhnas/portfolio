import { memo } from "react";
import styled from "styled-components";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";

const Laptop = ({ width = 16 }) => {
  return (
    <StyledLaptop width={width}>
      <Screen width={width} />
      <Keyboard width={width} />
    </StyledLaptop>
  );
};

const StyledLaptop = styled.div`
  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${width * 0.6}em`};
  position: absolute;
  transform-style: preserve-3d;
  transform: translate3d(0em, -12.5em, -3em);

  @media (min-width: 545px) {
    transform: translate3d(-6em, -12.5em, -1.5em);
  }
`;

export default memo(Laptop);
