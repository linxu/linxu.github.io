import { isNil } from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadResume } from "../state/ResumeSlice";
import { ScLink } from "../../../common/components/Link";

const ScLocale = styled.div`
  position: absolute;
  top: 10px;
  right: 60px;
`;

export function Locale() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("zh");

  useEffect(() => {
    if (!isNil(lang)) {
      dispatch(loadResume({ url: `resume_${lang}.json` }));
    }
  }, [dispatch, lang]);

  const changeLang = (language) => {
    setLang(language);
  };

  return (
    <ScLocale>
      <ScLink
        data-testid="lang-zh"
        active={lang === "zh"}
        onClick={() => {
          changeLang("zh");
        }}
      >
        中文
      </ScLink>
      /
      <ScLink
        data-testid="lang-en"
        active={lang === "en"}
        onClick={() => {
          changeLang("en");
        }}
      >
        English
      </ScLink>
    </ScLocale>
  );
}
