import { memo, useCallback, useRef } from "react";
import Desk from "../Desk/Index";
import Laptop from "../Laptop/Index";
import Nail from "../Nail/Index";
import Portrait from "../Portrait/Index";
import Papers from "../Papers/Index";
import SocialLinks from "../social/Index";
import styled from "styled-components";

const Workspace = () => {
  const sceneRef = useRef();

  /*
  30 70
  50 > 20
  */

  const handleMouseMove = useCallback((event) => {
    const { pageX, pageY } = event;

    const persX = pageX / window.innerWidth;
    const persY = pageY / window.innerHeight;

    const posX = persX * 30;
    const posY = persY * 20;

    sceneRef.current.style.perspectiveOrigin = `${posX + 35}% ${posY + 10}%`;
  }, []);

  return (
    <StyledWorkspace onMouseMove={handleMouseMove}>
      <Scene ref={sceneRef}>
        <Desk width={42.5} />
        <Laptop />
        <Nail />
        <Portrait width={15} />
        <Papers width={8} />
        <SocialLinks />
      </Scene>
    </StyledWorkspace>
  );
};

const StyledWorkspace = styled.div`
  font-size: 1rem !important;
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
