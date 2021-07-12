import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Biography } from "./Biography";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Locale } from "./Locale";
import { Schools } from "./Schools";
import { selectResume } from "../state/ResumeSlice";

const ScBody = styled.div`
  max-width: 700px;
  margin: 60px auto 30px;
  padding: 60px;
  background: ${({ theme }) => theme.colors.pureWhite};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export function Resume() {
  const resume = useSelector(selectResume);

  return (
    <>
      <Header data={resume.data} />
      <ScBody>
        <Locale />
        <Biography data={resume.data} />
        <Schools data={resume.data} />
      </ScBody>
      <Footer data={resume.data} />
    </>
  );
}
