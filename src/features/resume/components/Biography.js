import React from "react";
import styled from "styled-components";
import { ScText } from "../../../common/components/Text";
import { ScBox } from "../../../common/components/Box";
import { titleCssMixin, titleBeforeCssMixin } from "../util/CssMixins";

const ScTitle = styled.div`
  ${titleCssMixin}
  margin: 20px -60px 10px;
  &:before {
    ${titleBeforeCssMixin}
    background-position: -90px bottom;
  }
`;

export function Biography(props) {
  const { data } = props;
  return (
    <div>
      {data.bio && (
        <>
          <ScTitle>{data.bio.name}</ScTitle>
          <ScText fontSize="title">{data.bio.position}</ScText>
          <ScBox radius="4px" margin="30px 0" padding="20px" background="base">
            <ScText fontSize="medium" color="mediumGray">
              {data.bio.introduce}
            </ScText>
          </ScBox>
        </>
      )}
    </div>
  );
}
