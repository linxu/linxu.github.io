import { 
  loginUser, 
  getAppApi,
  getAppUrl,
} from "../integration/helpers";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Command for login, based on type of argument passed
 * NOTE: ALL ALIASED ROUTES SHOULD BE DONE BEFORE THE login FUNCTION.
 * @function
 * @param {string} login - The name of the command
 */

Cypress.Commands.add("login", (type) => {
  const appApi = getAppApi();
  let appUrl = getAppUrl();
  cy.request({
    url: `${appApi}/auth/login`,
    method: "post",
    body: loginUser,
  }).then(resp => {
    const payload = resp.body;
    const user = {
      userName: payload.user_name,
      userType: payload.user_type,
      organizationName: payload.organization_name,
    };
    appUrl += "?token=" + payload.token + "&user=" + encodeURIComponent(JSON.stringify(user));
    cy.viewport(1440, 1200);
    cy.visitWithoutFetch(appUrl);
  });
});

/**
 * Command for login, based on type of argument passed
 * NOTE: ALL ALIASED ROUTES SHOULD BE DONE BEFORE THE login FUNCTION.
 * @function
 * @param {string} mockLogin - The name of the command
 */

Cypress.Commands.add("mockLogin", (type) => {
  let appUrl = getAppUrl();
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MDU1Mjg1MzcsImlhdCI6MTYwNTQ4NTMzNywic3ViIjoicHNkZXZAcHJvY2xpdml0eXN5c3RlbXMuY29tIn0.Um3urRTMrfWya7BO_-gcyYY3boXB3wsFFTrfWNKzAax84JJBNHAOFbZcCiJjmByfFux9HGVV9VMcfOH6s2nFsg";
  const user = {
    userName: "Super Admin",
    userType: "ADMIN",
    organizationName: "Develop",
  };
  appUrl += "?token=" + token + "&user=" + encodeURIComponent(JSON.stringify(user));
  cy.viewport(1440, 1200);
  cy.visitWithoutFetch(appUrl);
});

/**
 * Command for logout, based on type of argument passed
 * @function
 * @param {string} logout - The name of the command
 */

Cypress.Commands.add("logout", (type) => {
  localStorage.clear();
  cy.viewport(1440, 1200);
  cy.visitWithoutFetch(getAppUrl());
});

/**
 * Command that yields DOM element(s) it found.
 * @param {string} getTestId - The name of the command
 * @param {string} testId - The value of the data-testid attribute that is attached to an element
 */

Cypress.Commands.add("getTestId", (testId) => {
  return cy.get(`[data-testid=${testId}]`);
});

/**
 * Command to find an element in the previously yielded element
 * 
 * This callback function is called `findElementCallback` and returns an element based on attribute passed.
 * @callback findElementCallback
 * @param {string} subject previously yielded container element
 * @param {string} targetEl - The value of the data-testid attached to the target element
 * @returns {string} The targeted element
 *
 * @function
 * @param {string} findTestId - The name of the command
 * @param {object} prevSubject - The previously yielded element
 * @callback findElementCallback - The callback function that takes container element and find the target element

 */

Cypress.Commands.add(
  "findTestId",
  { prevSubject: "element" },
  (subject, targetEl) => {
    return cy.wrap(subject).find(`[data-testid=${targetEl}]`);
  }
);

Cypress.Commands.add("clearSession", () => {
  const session_key = "session";
  window.localStorage.removeItem(session_key);
});

/**
 * Command that gets the current URL of the page that is currently active and asserts that it is in the expected URL
 * @param {string} checkUrl - The name of the command
 * @param {string} urlString - The expected URL
 */

Cypress.Commands.add("checkUrl", (urlString) => {
  cy.url().then(($url) => {
    // save url from the first element
    expect($url).to.contain(urlString);
  });
});

/**
 * Will check and assert the element functionality
 *
 * @param {string} checkAndAssert - The name of the command
 * @param {string} element - The value of the data-testid attached to the target element
 */

Cypress.Commands.add("checkAndAssert", (element) => {
  cy.getTestId(element).click();
  cy.getTestId(element).find("input").should("be.checked");
});

/**
 * Command to remove fetch method from window object so API request will fallback to XHR request instead of fetch request
 * This will allow Cypress to intercept API calls
 *
 * @callback removeFetch
 * @param {string} path The path that fetch method need to be removed from
 * @param {string} opt - The options that might be added to window object
 * @param {string} visitWithoutFetch - The name of the command
 * @callback removeFetch - The callback function that removes fetch from window object
 */

Cypress.Commands.add("visitWithoutFetch", (path, opts = {}) => {
  cy.visit(
    path,
    Object.assign(opts, {
      onBeforeLoad(win) {
        delete win.fetch;
      },
    })
  );
});

/**
 * Command that makes cypress wait aliased route to respond with 200 (success) before proceeding to avoid breaking the test that depends on the data that comes back from server
 * 
 * This callback function is called `waitAliasRouteCallback` that waits alias route and asserts the response is 200.
 * @callback waitAliasRouteCallback
 * @param {string} element previuosly yielded subject
 * @param {string} alias - The alias route that cypress need to wait
 * @param {object} options - The options for cypress wait command (ref:https://docs.cypress.io/api/commands/wait.html#Arguments)

 *
 * @function
 * @param {string} waitAPISuccess - The name of the command
 * @param {object} { prevSubject: true } - Setting previous subject to true allows to receive the previous subject: (child command)
 * @callback waitAliasRouteCallback - The callback function that takes 
 */

Cypress.Commands.add(
  "waitAPISuccess",
  { prevSubject: true },
  (element, alias, options) => {
    cy.wrap(element)
      .wait(alias, options)
      .then((response) => {
        if (response.statusCode) {
          const strResponse = response.statusCode.toString();
          const result = Number(strResponse.slice(0, 1));
          expect(result).to.eq(2);
        }
      });
  }
);