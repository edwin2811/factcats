/// <reference types="cypress" />



//const { has } = require("cypress/types/lodash")
let config = require('/Users/1090982/Documents/Ellcats/factsofcats/cypress/fixtures/cats.json');

describe ('get users for api facts', function () {
    describe ('validating users for the fatcs', () => {
    console.log("====base =======", config.testData.baseUrl);
    it('get users', ()=> {
        cy.visitwebsitecats(config.testData.baseUrl)
      
    })

    console.log("====base =======", config.testData.baseUrl);
    it('Verify all users for facts of cats', ()=> {
        
        cy.visiturlfactscats(config.testData.baseUrl)
    })
})
})