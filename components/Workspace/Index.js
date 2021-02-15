import { memo } from "react";
import Desk from "../Desk/Index";
import Laptop from "../Laptop/Index";
import Nail from "../Nail/Index";
import Portrait from "../Portrait/Index";
import styled from "styled-components";

const Workspace = () => {
  return (
    <StyledWorkspace>
      <Scene>
        <Desk />
        <Laptop />
        <Nail />
        <Portrait />
      </Scene>
    </StyledWorkspace>
  );
};

const StyledWorkspace = styled.div`
  font-size: 0.5rem;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) =>
      `${theme.bg.workspace} radial-gradient(circle at 30% 30%, #fff, transparent)`};
  }

  @media (min-width: 270px) {
    font-size: 0.7rem;
  }

  @media (min-width: 791px) {
    font-size: 0.8rem;
  }

  @media (min-width: 900px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

const Scene = styled.div`
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transform-style: preserve-3d;
  perspective: 600px;
  perspective-origin: 50% 10%;
  transition: perspective-origin 0.1s;
`;

export default memo(Workspace);
