class Login {
    getLoginInput() {
        return cy.xpath(`//input[@type="email"]`)
    }

    getNextButton() {
        return cy.xpath(`//span[text()="Next"]//parent::button`)
    }
}

export default Login