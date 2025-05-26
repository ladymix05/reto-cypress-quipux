class Authentication {
    getPasswordInput(timeout) {
        return cy.xpath(`//input[@name="Passwd"]`, {timeout: timeout})
    }

    getNextButton() {
        return cy.xpath(`//span[text()="Next"]//parent::button`)
    }
}

export default Authentication