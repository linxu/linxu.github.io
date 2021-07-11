import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../app/theme";
import { Provider } from "react-redux";
import { store } from "../../app/state/store";

const history = createMemoryHistory();

/**
 * Wraps components to provide access to the redux store and theme context when running components with unit and integration tests
 * @param {Node} children - Components that need context provided to them
 */
function WithStoreAndTheme({ children }) {
  return (
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
      </Provider>
    </Router>
  );
}

export default WithStoreAndTheme;
