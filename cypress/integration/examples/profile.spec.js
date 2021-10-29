describe("Profilepage", () => {
    it("Sign out function", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('checkEmail');
        cy.visit("https://geeksforgeeks-90cf4.web.app/");
        cy.get('#Login').click();
        cy.get('#emailAddress').type("cricket@gmail.com");
        cy.get('#password').type("cricket");
        cy.get('#primary').click();
        cy.get('#Profile').click();
        cy.get('#email').contains("cricket@gmail.com");
        cy.get('#primary').click();
        cy.url().should('include', 'Home');
        cy.get('#Login').click();
        cy.wait('@checkEmail');

        //hom 0-> login -> sign out -> home -> progile not exist or login houlf ecist
    })
})