import styled from "styled-components";
import Workspace from "../components/Workspace/Index";

export default function Home() {
  return (
    <>
      <Title>Moaaz Bhnas</Title>
      <Workspace />
    </>
  );
}

const Title = styled.h1`
  position: absolute;
  left: -200em;
`;
