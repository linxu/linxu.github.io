import React from 'react';
import styled from "styled-components";
import { titleCssMixin, titleBeforeCssMixin } from '../util/CssMixins';

const ScHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.pureWhite};
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ScTitle = styled.div`
  ${titleCssMixin}
  line-height: 55px;
  border: none;
  margin: 0 0 0 50px;
  &:before {
    ${titleBeforeCssMixin}
    background-position: -90px bottom;
    left: -40px;
    top: 5px;
  }
`;

export function Header(props) {
  const { data } = props;
  return (
    <ScHeader>
      {data.bio && (
        <ScTitle data-testid="header-title">{data.bio.name}</ScTitle>
      )}
    </ScHeader>
  );
}