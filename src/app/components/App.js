import React from 'react';
import { ThemeProvider } from "styled-components";
import Routes from './Routes';
import { getTheme } from "../theme";

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
