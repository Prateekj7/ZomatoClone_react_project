
describe("login page", () => {
    it("For Incorrect credential", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/verifyPassword'
        }).as('verifyPassword');
        cy.visit("https://geeksforgeeks-90cf4.web.app/Login");
        cy.get('#emailAddress').type("type@gmail.com");
        cy.get('#password').type("password");
        cy.get('#primary').click();
        cy.wait('@verifyPassword');
        cy.get('#errorMessage').contains("There is no user record");
    })
    it("For correct credential", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/verifyPassword'
        }).as('verifyPassword');
        cy.visit("https://geeksforgeeks-90cf4.web.app/Login");
        cy.get('#emailAddress').type("cricket@gmail.com");
        cy.get('#password').type("cricket");
        cy.get('#primary').click();
        cy.wait('@verifyPassword');
        cy.url().should('include', 'Home');
        
        cy.get('#email').type("cricket@gmail.com");
        //Go to profile
        //check if same email id exists. 
    })
    it("SignUp", () => {
        cy.visit("https://geeksforgeeks-90cf4.web.app/Login");
        cy.get('#secondary').click();
        cy.url().should('include', 'SignUp');
    })
    it("SignOut", () => {
        cy.visit("https://geeksforgeeks-90cf4.web.app/Login");
        cy.get('#tertiary').click();
        cy.url().should('include', 'Home');
    })
})