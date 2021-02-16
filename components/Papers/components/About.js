import { memo } from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <Title>Next.js | Web Accessibility Developer</Title>
    </StyledAbout>
  );
};

const StyledAbout = styled.article``;

const HGroup = styled.hgroup``;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5em 0 0 0;
  line-height: 1.2;
`;

export default memo(About);
