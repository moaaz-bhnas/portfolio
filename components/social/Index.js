import { memo } from "react";
import styled, { keyframes } from "styled-components";

const socialLinks = [
  {
    app: "LinkedIn",
    link: "https://www.linkedin.com/in/moaaz-bhnas/",
    icon: "/linkedin.svg",
  },
  {
    app: "GitHub",
    link: "https://github.com/moaaz-bhnas",
    icon: "/github.svg",
  },
];

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {socialLinks.map((item) => (
        <Item key={item.app}>
          <Link href={item.link}>
            <Image src={item.icon} alt={item.app} className="socialIcon" />
          </Link>
        </Item>
      ))}
    </StyledSocialLinks>
  );
};

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
`;

const StyledSocialLinks = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  transition: opacity 0.2s;
  animation: ${fadeIn} 0.4s backwards 3.2s; ;
`;

const Item = styled.li`
  position: absolute;

  &:first-child {
    top: 5em;
    left: 23em;
    transform: rotate(-15deg);

    @media (min-width: 545px) {
      top: 4em;
      left: 18em;
    }

    @media (min-width: 800px) {
      top: 4em;
      left: 11em;
    }
  }

  &:last-child {
    top: 7em;
    left: 13em;
    transform: rotate(-15deg);

    @media (min-width: 545px) {
      top: 7em;
      left: 6em;
    }

    @media (min-width: 800px) {
      top: 15em;
      left: -3em;
    }
  }
`;

const Link = styled.a`
  &:hover {
    .socialIcon {
      transform: scale(1.1);
    }
  }
`;

const Image = styled.img`
  width: 3em;
  transition: transform 0.15s;
`;

export default memo(SocialLinks);
