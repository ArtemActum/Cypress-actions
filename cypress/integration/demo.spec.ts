describe("Demo Test", () => {
    it("Should login into an application", () => {
        cy.visitLoginpage()
        //cy.login('username', 'password')

        cy.fixture("loginData").then(({ username, password }) => {
            cy.login(username, password)
        })
    })
})