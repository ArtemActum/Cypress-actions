describe("Demo Test", () => {
    it("Should submit feedback form", () => {
        cy.visitFeedbackpage()
        cy.submitFeedback('Peter', 'test@email.com', 'My subject', 'My message')
    })
})