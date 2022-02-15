/// <reference types="cypress" />


Cypress.Commands.add("visiturlfactscats", (baseUrl) => {
   
    cy.request({
        'method' : 'GET',
        'url' : 'https://cat-fact.herokuapp.com/facts',
        'headers' : {
            'Content-Type': 'application/json'
        },
        "failOnStatusCode": false

    }).then((res)=>{
        const allfacts = res.body
        return allfacts
    })
        .then((allfacts)=>{

            for(let i=0; i< allfacts.length; i++){
            cy.request({
                'method' : 'GET',
                'url' : 'https://cat-fact.herokuapp.com/facts/' +allfacts[i]._id ,
                'headers' : {
                    'Content-Type': 'application/json',
                },
                "failOnStatusCode": false
                
            }).then((res)=>{
                    cy.log(JSON.stringify(res.body))
                    expect(res.status).to.eq(200)
                    expect(res.body.user.name).has.property('first','Kasimir')
                    expect(res.body.user.name).has.property('last','Schulz')
                    expect(res.body).to.have.property('_id', allfacts[i]._id )
                    expect(res.body).to.have.property('type', allfacts[i].type )
                    expect(res.body).to.have.property('text', allfacts[i].text )
                    expect(res.body.user.name.first).to.eq('Kasimir' )
                    expect(res.body.user.name.last).to.eq('Schulz' )

            })
            }    
        })    
    


})