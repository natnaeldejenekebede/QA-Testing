/* ==== Test Created with Cypress Studio ==== */
it("googletest", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("localhost:3000");

  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.get("#Go").click();
  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.get("#Go").click();
  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").clear("b");
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").type("test@google.com");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");

  cy.get(":nth-child(4) > .inline-block").click();
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.get(".z-10 > :nth-child(3) > .h-full").clear("12");
  cy.get(".z-10 > :nth-child(3) > .h-full").type("1234");
  cy.get(":nth-child(4) > .h-full").clear("1");
  cy.get(":nth-child(4) > .h-full").type("1243");
  cy.get(".rounded-md > .gradient").click();
  cy.get(":nth-child(4) > .h-full").clear("124");
  cy.get(":nth-child(4) > .h-full").type("1234");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");

  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");

  cy.get(".relative > span").click();

  /* ==== End Cypress Studio ==== */
});
