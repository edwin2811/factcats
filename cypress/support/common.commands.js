/// <reference types="cypress" />


//const { should } = require("chai")

Cypress.Commands.add("visitwebsitecats", (baseUrl) => {
   
    cy.request({
        'method' : 'GET',
        'url' : 'https://cat-fact.herokuapp.com/facts',
        'headers' : {
            'Content-Type': 'application/json'
        },
        "failOnStatusCode": false

    }).then((res)=>{
        const id = res.body[0]._id
        return id
    })
        .then((id)=>{
            cy.request({
                'method' : 'GET',
                'url' : 'https://cat-fact.herokuapp.com/facts/' +id ,
                'headers' : {
                    'Content-Type': 'application/json',
                },
                "failOnStatusCode": false
                
            }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body).to.have.property('_id', id)
            })
      })    
        


})