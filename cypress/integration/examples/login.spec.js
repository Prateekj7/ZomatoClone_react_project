
describe("login page", () => {
    it("Check if we are able to type", () => {
        cy.visit("https://geeksforgeeks-90cf4.web.app/Login");
        cy.get('#emailAddress').type("type@gmail.com");
        cy.get('#password').type("password");
    })
})