export const loginUser = {
  username: "admin",
  password: "123456",
};

export const getAppApi = () => {
  return Cypress.env("REACT_APP_API");
};

export const getAppUrl = () => {
  return Cypress.env("REACT_APP_URL");
};