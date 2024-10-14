/* ==== Test Created with Cypress Studio ==== */
it("signin ", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("localhost:3000");
  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").clear("b");
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").type("natty@gmail.com");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");

  cy.get(":nth-child(3) > :nth-child(1) > .h-full").clear("b");
  cy.get(":nth-child(3) > :nth-child(1) > .h-full").type("natty");
  cy.get(":nth-child(3) > :nth-child(2) > .h-full").clear("a");
  cy.get(":nth-child(3) > :nth-child(2) > .h-full").type("natty");
  cy.get('[type="email"] > .h-full').clear("b");
  cy.get('[type="email"] > .h-full').type("natty");
  cy.get(":nth-child(4) > .h-full").clear("23");
  cy.get(":nth-child(4) > .h-full").type("234");
  cy.get(":nth-child(5) > .h-full").clear("2");
  cy.get(":nth-child(5) > .h-full").type("234");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup", {
    force: true,
  });

  cy.get("#0").click();
  cy.get("#0").clear();
  cy.get("#0").type("1");

  cy.get("#1").click();
  cy.get("#1").clear();
  cy.get("#1").type("2");

  cy.get("#2").click();
  cy.get("#2").clear();
  cy.get("#2").type("3");

  cy.get("#3").click();
  cy.get("#3").clear();
  cy.get("#3").type("4");

  cy.get("#4").click();
  cy.get("#4").clear();
  cy.get("#4").type("5");

  cy.get("#5").click();
  cy.get("#5").clear();
  cy.get("#5").type("6");
  // cy.screenshot()
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  // cy.screenshot()
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  // cy.screenshot()
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  /* ==== End Cypress Studio ==== */
  /* ==== End Cypress Studio ==== */
});
