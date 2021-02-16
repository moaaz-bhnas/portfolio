import styled from "styled-components";
import Workspace from "../components/Workspace/Index";

export default function Home() {
  return (
    <>
      <Title>Portfolio</Title>
      <Workspace />
    </>
  );
}

const Title = styled.h1`
  position: absolute;
  left: -200em;
`;
