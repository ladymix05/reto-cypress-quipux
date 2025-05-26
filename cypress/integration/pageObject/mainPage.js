class MainPage {
    getComposeEmailButton() {
        return cy.xpath(`//div[text()="Compose"]`)
    }

    getRecipientsDiv() {
        return cy.xpath(`//div[text()="Recipients"]`)
    }

    getToRecipientsInput() {
        return cy.xpath(`//input[@aria-label="To recipients"]`)
    }

    getSubjectInput() {
        return cy.xpath(`//input[@name="subjectbox"]`)
    }

    getFileInput() {
        return cy.xpath(`//input[@type="file"]`)
    }

    getSentEmailButton() {
        return cy.xpath(`//div[text()="Send"]`)
    }
}

export default MainPage