/// <reference types="cypress" />

import {
  getAppUrl,
} from "../helpers";

context('Resume Actions', () => {
  beforeEach(() => {
    cy.intercept("GET", "/resume_zh.json").as("GetResumeForZH");
    cy.intercept("GET", "/resume_en.json").as("GetResumeForEN");
    cy.visitWithoutFetch(getAppUrl());
  })

  it("Change Language For Resume", () => {
    const zhName = "林 旭";
    const enName = "Linxu";
    cy.wait("@GetResumeForZH");
    cy.getTestId("header-title")
      .contains(zhName);
    cy.getTestId("lang-en")
      .click();
    cy.wait("@GetResumeForEN");
    cy.getTestId("header-title")
      .contains(enName);
    cy.getTestId("lang-zh")
      .click();
    cy.wait("@GetResumeForZH");
    cy.getTestId("header-title")
      .contains(zhName);
  });

})
