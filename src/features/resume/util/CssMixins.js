import { css } from "styled-components";
import icons from "../../../assets/icons.png";

export const titleCssMixin = css`
  position: relative;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -2px;
  text-transform: uppercase;
  border-left: 52px solid ${({ theme }) => theme.colors.black};
  font: bold 20px/12px "verdana", sans-serif;
  padding: 1px 0 0 8px;
  margin: 20px -60px 10px;
`;

export const titleBeforeCssMixin = css`
  content: "";
  position: absolute;
  width: 45px;
  height: 45px;
  left: -105px;
  top: -15px;
  background-image: url(${icons});
`;
