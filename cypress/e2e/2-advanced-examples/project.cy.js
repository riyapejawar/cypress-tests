/// <reference types="cypress" />
describe('Cura Make appointment',function(){

it('Verify the title of the page',function()
{
//cy.visit('https://katalon-demo-cura.herokuapp.com/');
cy.visit('https://demo.nopcommerce.com/')
cy.title().should('eq','nopCommerce demo store')
cy.wait(2000)
cy.get('#small-searchterms').type('Computers') //search data
cy.get('#small-search-box-form > button').click //search button
cy.wait(5000)
});

it('Search data',function()
{
// cy.get('#small-searchterms').type('Computers') //search data
// cy.get('#small-search-box-form > button').click //search button
cy.wait(5000)
})


it('Verify Appointment',function()
{

})

})