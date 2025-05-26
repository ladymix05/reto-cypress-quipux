import {Before, Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps'

import Login from "../../pageObject/login";
import Authentication from "../../pageObject/authentication";
import MainPage from "../../pageObject/mainPage";

//Page Object Models
let loginPom = new Login()
let authenticationPom = new Authentication()
let mainPagePom = new MainPage()

Given('Ingreso a la pagina de login', () => {
    cy.visit('/')
})

And('Ingreso el correo', () => {
    loginPom.getLoginInput().type(Cypress.env('email'))
    loginPom.getNextButton().click()
})

And('Ingreso la clave', () => {
    authenticationPom.getPasswordInput(10000).should('be.visible')
    authenticationPom.getPasswordInput(0).type(Cypress.env('password'))
    authenticationPom.getNextButton().click()
})