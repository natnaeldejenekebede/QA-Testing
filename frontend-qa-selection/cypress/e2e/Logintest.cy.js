/* ==== Test Created with Cypress Studio ==== */
it("Login", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("localhost:3000");
  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").clear("b");
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").type("test@example.com");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.get(":nth-child(4) > .group > .h-full").clear("te");
  cy.get(":nth-child(4) > .group > .h-full").type("test@123");
  cy.get(".opacity-70 > .gradient").click();
  cy.get(".relative > span").click();
  // cy.get(".relative > span").click();
  /* ==== End Cypress Studio ==== */
});
