import { memo } from "react";
import styled from "styled-components";

const Nail = () => {
  return <StyledNail />;
};

const StyledNail = styled.div`
  display: none;
  position: absolute;
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background-color: #3b2212;
  transform: translate3d(16.1em, -31.4em, -18em);
  @media (min-width: 545px) {
    display: block;
  }
`;

export default memo(Nail);
