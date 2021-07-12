import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
 * ScText is display text component
 */
export const ScText = styled.p.attrs((props) => ({
  as: props.element ? props.element : "p",
}))`
  ${({ fontSize, theme }) => (fontSize
    ? theme.typography.fontSize[fontSize]
    : "")};
  color: ${({ color, theme }) => (theme.colors[color] ? theme.colors[color] : theme.colors.black)};
  font-family: ${({ theme }) => theme.typography.main};
  ${({ bold }) => bold &&
    css`
      font-weight: bold;
    `};
  ${({ underline }) => underline &&
    css`
      text-decoration: underline;
    `};
  ${({ cursor }) => cursor &&
    css`
      cursor: pointer;
    `};
  margin: 0;
  padding: 0;
  display: inline-block;
  word-wrap: break-word;
`;

ScText.propTypes = {
  /** text font size, e.g.: tiny */
  fontSize: PropTypes.string,
  /** text color, e.g.: black */
  color: PropTypes.string,
  /** Defines thick characters */
  bold: PropTypes.bool,
  /** Specifies that a line will be displayed under the text */
  underline: PropTypes.bool,
  /** The cursor is a pointer */
  cursor: PropTypes.bool,
  /** html element type */
  element: PropTypes.node,
};
