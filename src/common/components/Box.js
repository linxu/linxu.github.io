import PropTypes from 'prop-types';
import styled from "styled-components";

/**
 * ScBox component serves as a wrapper component for most of the CSS utility needs.
 */
export const ScBox = styled.div`
  background: ${({ background, theme }) => (background ? theme.colors[background] : theme.colors.pureWhite)};
  border: 1px solid ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.lightGray)};
  border-radius: ${({ radius }) => (radius ? radius : "2px")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  margin: ${({ margin }) => margin ? margin : "auto"};
  padding: ${({ padding }) => padding ? padding : "auto"};
  overflow: auto;
`;

ScBox.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
};
