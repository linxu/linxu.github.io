import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const ScLink = styled.a`
  cursor: pointer;
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.mediumBlack)};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  margin: ${({ margin }) => (margin || "auto")};
  ${({ active }) => active &&
    css`
      text-decoration: underline;
    `};
  ${({ theme }) => theme.typography.fontSize.tiny}
`;

ScLink.propTypes = {
  color: PropTypes.string,
  underline: PropTypes.bool,
  active: PropTypes.bool,
  margin: PropTypes.string,
};
