import { memo } from "react";
import styled from "styled-components";
import Screen from "./components/Screen";

const Laptop = ({ width = 16 }) => {
  return (
    <StyledLaptop width={width}>
      <Screen width={width} />
    </StyledLaptop>
  );
};

const StyledLaptop = styled.div`
  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${width * 0.6}em`};
  position: absolute;
  transform-style: preserve-3d;
  transform: translate3d(0em, -12em, -4em);
`;

export default memo(Laptop);
