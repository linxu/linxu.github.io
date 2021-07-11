import React from "react";
import styled from "styled-components";

const ScFooter = styled.footer`
  text-align: center;
  font: bold 10px sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin: 20px 0 60px;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.pureWhite};
`;

export function Footer(props) {
  const { data } = props;
  return (
    <ScFooter id="copyright">{data.message && data.message.copyright}</ScFooter>
  );
}
