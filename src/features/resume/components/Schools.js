import React from "react";
import styled from "styled-components";
import { ScText } from "../../../common/components/Text";
import { titleCssMixin, titleBeforeCssMixin } from "../util/CssMixins";

const ScTitle = styled.div`
  ${titleCssMixin}
  &:before {
    ${titleBeforeCssMixin}
    background-position: right top;
  }
`;

const ScUl = styled.ul`
  margin: 50px 0 0 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
`;

const ScLi = styled.li`
  float: left;
  width: 50%;
`;

export function Schools(props) {
  const { data } = props;
  return (
    <div>
      {data.school && (
        <>
          <ScTitle>{data.school.title}</ScTitle>
          <ScUl>
            {data.school.schools.map((item) => (
              <ScLi>
                <ScText bold element="h3" style={{ display: "block" }}>{item.name}</ScText>
                <ScText bold element="h4" style={{ display: "block" }}>{item.level}</ScText>
                <ScText bold element="h5" style={{ display: "block", fontStyle: "italic" }}>{item.date}</ScText>
              </ScLi>
            ))}
          </ScUl>
        </>
      )}
    </div>
  );
}
