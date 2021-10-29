describe("Profilepage", () => {
    it("For correct detials", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('checkEmail');
        cy.visit("https://geeksforgeeks-90cf4.web.app/Home");
        cy.get('#email').type("cricket@gmail.com");
        cy.wait('@checkEmail');
    })
})