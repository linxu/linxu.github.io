import { css } from "styled-components";

const commonColors = {
  primary: "#F26161",
  secondary: "#21222F",
  highlightPrimary: "#E5F3F9",
  highlightSecondary: "#FFFCEC",
  white: "#FFFCEC",
  pureWhite: "#FFFFFF",
  error: "#C60101",
  success: "#47BA67",
  alert: "#F8AF42",
  cancel: "#A9A9A9",
  lightGray: "#E2E4ED",
  lightRed: "#DD5508",
  mediumGray: "#71778D",
  black: "#21222F",
  mediumBlack: "#151619",
  base: "#F6F6F6",
  warning: "#C60101",
  graph: [
    "#289D42",
    "#1B6995",
    "#DD5508",
    "#4C2B82",
    "#68C221",
    "#D48C00",
    "#0B90C9",
    "#28784D",
    "#873795",
  ],
  hoverLookup: {
    secondary: "#4D5463",
    cancel: "rgb(118, 118, 118)",
    error: "rgba(184, 0, 0, 1)",
  },
  disabled: { main: "rgba(0, 0, 0, 0.5)", border: "#D3D3D3" },
};

export const baseTheme = {
  typography: {
    headers: "Heebo, sans-serif, Arial, Helvetica",
    main: "Heebo, sans-serif, Arial, Helvetica",
    lineHeight: "23px",
    fontSize: {
      ultra: css`
        font-size: 80px;
        line-height: 117px;
      `,
      mega: css`
        font-size: 64px;
        line-height: 94px;
      `,
      h1: css`
        font-size: 40px;
        line-height: 59px;
      `,
      h2: css`
        font-size: 32px;
        line-height: 47px;
      `,
      h3: css`
        font-size: 28px;
        line-height: 41px;
      `,
      h4: css`
        font-size: 24px;
        line-height: 35px;
      `,
      h5: css`
        font-size: 20px;
        line-height: 29px;
      `,
      h6: css`
        font-size: 18px;
        line-height: 24px;
      `,
      h7: css`
        font-size: 16px;
        line-height: 24px;
      `,
      body: css`
        font-size: 18px;
        line-height: 24px;
      `,
      caps: css`
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      `,
      caption: css`
        font-size: 14px;
        line-height: 16px;
      `,
      title: css`
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
      `,
      link: css`
        font-size: 14px;
        line-height: 16px;
        text-decoration: underline;
      `,
      tiny: css`
        font-size: 13px;
        line-height: 14px;
      `,
      extraTiny: css`
        font-size: 11px;
        line-height: 13px;
      `,
      medium: css`
        font-size: 14px;
        line-height: 18px;
      `,
      main: css`
        font-size: 16px;
      `,
      subtext: css`
        font-size: 12px;
      `,
    },
  },
  borderRadius: "1px",
  boxShadow: {
    light: "2px 2px 8px rgba(0, 0, 0, 0.16)",
    heavy: "0px 0px 32px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.24)",
  },
};

export const resumeTheme = {
  name: "resume theme",
  colors: {
    ...commonColors,
  },
};

export const getTheme = () => {
  return { ...baseTheme, ...resumeTheme };
};
