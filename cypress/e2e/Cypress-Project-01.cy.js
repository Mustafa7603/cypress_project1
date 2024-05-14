/// <reference types="Cypress"/>

describe("My first project", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-1");
  });

  it("Test1", () => {
    cy.get('[class="is-size-3"]').should("have.text", "Contact Us");
    cy.get("#address").should(
      "have.text",
      "2800 S River Rd Suite 310, Des Plaines, IL 60018"
    );
    cy.get("#email").should("have.text", "info@techglobalschool.com");
    cy.get("#phone-number").should("have.text", "(224) 580-2150");
  });

  it("Test2", () => {
    cy.get('.field > [for="name"]').should("be.visible");
    cy.get('[placeholder="Enter your full name"]').should(
      "have.attr",
      "required"
    );
    cy.get('.field > [for="name"]').should("have.text", "Full name *");
    cy.get('[placeholder="Enter your full name"]').should(
      "have.attr",
      "placeholder",
      "Enter your full name"
    );
  });

  it("Test3", () => {
    cy.get(".field:nth-child(2) label:nth-child(1)").should(
      "have.text",
      "Gender *"
    );
    cy.get("[type='radio']").should("have.attr", "required");
    cy.get(".radio").should("contain", "Female");
    cy.get(".radio").should("contain", "Male");
    cy.get(".radio").should("contain", "Prefer not to disclose");
    cy.get("[type='radio']").should("not.be.checked");
    cy.get("[type='radio']").click({ multiple: true });
    cy.get("label:nth-child(2)").click();
    cy.get("label:nth-child(3)").should("not.be.checked");
    cy.get("label:nth-child(4)").should("not.be.checked");
    cy.get("label:nth-child(3)").click();
    cy.get("label:nth-child(2)").should("not.be.checked");
    cy.get("label:nth-child(4)").should("not.be.checked");
  });

  it("Test4", () => {
    cy.get(".field:nth-child(3) input").should("be.visible");
    cy.get(".field:nth-child(3) input").should("not.have.attr", "required");
    cy.get(".field:nth-child(3) label").should("have.text", "Address");
    cy.get(".field:nth-child(3) input").should(
      "have.attr",
      "placeholder",
      "Enter your address"
    );
  });

  it("Test5", () => {
    cy.get(".field:nth-child(4) input").should("be.visible");
    cy.get(".field:nth-child(4) input").should("have.attr", "required");
    cy.get(".field:nth-child(4) label").should("have.text", "Email *");
    cy.get(".field:nth-child(4) input").should(
      "have.attr",
      "placeholder",
      "Enter your email"
    );
  });

  it("Test6", () => {
    cy.get(".field:nth-child(5) input").should("be.visible");
    cy.get(".field:nth-child(5) input").should("not.have.attr", "required");
    cy.get(".field:nth-child(5) label").should("have.text", "Phone");
    cy.get(".field:nth-child(5) input").should(
      "have.attr",
      "placeholder",
      "Enter your phone number"
    );
  });

  it("Test7", () => {
    cy.get(".field:nth-child(6) .textarea").should("be.visible");
    cy.get(".field:nth-child(6) .textarea").should("not.have.attr", "required");
    cy.get(".field:nth-child(6) label").should("have.text", "Message");
    cy.get(".field:nth-child(6) .textarea").should(
      "have.attr",
      "placeholder",
      "Type your message here..."
    );
  });

  it("Test8", () => {
    cy.get(".field:nth-child(7) label").should(
      "have.text",
      " I give my consent to be contacted."
    );
    cy.get(".field:nth-child(7) input").should("have.attr", "required");
    cy.get(".field:nth-child(7) input").click().should("be.enabled").uncheck();
    cy.get(".field:nth-child(7) label").click();
    cy.get(".field:nth-child(7) input").should("be.checked");
    cy.get(".field:nth-child(7) label").click();
    cy.get(".field:nth-child(7) input").should("not.be.checked");
  });

  it("Test9", () => {
    cy.get(".field .button")
      .should("be.visible")
      .and("is.enabled")
      .and("has.text", "SUBMIT");
  });

  it("Test10", () => {
    cy.get(".control > .input").eq(0).type("Phil Mckraken");
    cy.get(".mr-1").eq(0).click();
    cy.get(".control > .input").eq(1).type("NightMare on Elm street");
    cy.get(".control > .input").eq(2).type("rickroll@gmail.com");
    cy.get(".control > .input").eq(3).type("(773) 202 2312");
    cy.get(".textarea").type("awesome project");
    cy.get(".checkbox > input").click();
    cy.get(".button").click();
    cy.get(".mt-5").should("have.text", "Thanks for submitting!");
    cy.on("uncaught:exception", (err) => {
      return false;
    });
  });
});
