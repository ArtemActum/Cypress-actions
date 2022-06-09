describe("Demo Test", () => {
    it("Should submit feedback form", () => {
        cy.visitFeedbackpage()

        //cy.submitFeedback('Peter', 'test@email.com', 'My subject', 'My message')

        cy.fixture("feedbackData").then(({ name, email, subject, message }) => {
            cy.submitFeedback(name, email, subject, message)
        })
    })
})