import { css } from "styled-components";
import sizes from "../../shared/sizes";

export const keyStyles = css`
  background-color: ${({ theme }) => theme.bg.keys};
  border: ${({ theme }) =>
    `${sizes.border.default} solid ${theme.border.laptop}`};
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  &:active {
    background-color: #fff;
  }
`;
