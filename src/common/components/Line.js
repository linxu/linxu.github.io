import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * ScLine Component is a thin line that groups content in lists and layouts.
 */
export const ScLine = styled.div`
  background: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.lightGray};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
`;

ScLine.propTypes = {
  /** Line background color */
  color: PropTypes.string,
  /** Line width */
  width: PropTypes.string,
  /** Line height */
  height: PropTypes.string,
  /** Line margin */
  margin: PropTypes.string,
};
