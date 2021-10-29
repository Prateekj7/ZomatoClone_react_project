describe("sign up page", () => {
    it("For Incorrect signup", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/signupNewUser'
        }).as('getAccountInfo');
        cy.visit("https://geeksforgeeks-90cf4.web.app/");
        cy.get('#SignUp').click();
        cy.get('#firstName').type("type");
        cy.get('#lastName').type("type");
        cy.get('#emailAddress').type("cricket@gmail.com");
        cy.get('#password').type("cricket");
        cy.get('#primary').click();
        cy.wait('@getAccountInfo');
        cy.get('#errorMessage').contains("already in use");
    })
    it("For correct credential", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('verifyPassword');
        cy.visit("https://geeksforgeeks-90cf4.web.app/");
        cy.get('#SignUp').click();
        cy.get('#firstName').type("football");
        cy.get('#lastName').type("football");
        cy.get('#emailAddress').type(`cricket${Date.now()}@gmail.com`);
        cy.get('#password').type("cricket");
        cy.get('#primary').click();
        cy.wait('@verifyPassword');
        cy.url().should('include', 'Home');
    })
    it("SignUp", () => {
        cy.visit("https://geeksforgeeks-90cf4.web.app/SignUp");
        cy.get('#secondary').click();
        cy.url().should('include', 'Login');
    })
    it("SignOut", () => {
        cy.visit("https://geeksforgeeks-90cf4.web.app/SignUp");
        cy.get('#tertiary').click();
        cy.url().should('include', 'Home');
    })
})