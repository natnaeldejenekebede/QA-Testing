it("recovery", function () {
  cy.visit("localhost:3000");
  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").clear("b");
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").type("test@example.com");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.get(":nth-child(4) > .inline-block").click();
  cy.get(".z-10 > .group > .h-full").clear("te");
  cy.get(".z-10 > .group > .h-full").type("test@example.com");

  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.get(".text-nowrap > .group > .h-full").clear("1");
  cy.get(".text-nowrap > .group > .h-full").type("1234");
  cy.get(":nth-child(4) > .h-full").clear("12");
  cy.get(":nth-child(4) > .h-full").type("1234");

  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");

  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  // cy.screenshot()
  cy.get(".gap-1\\.5 > .relative").click();
  /* ==== End Cypress Studio ==== */
});
