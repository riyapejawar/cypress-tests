/// <reference types="cypress" />
describe('Cura Make appointment',function(){

    it('Book an appointment',function()
    {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.wait(2000);
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.wait(2000);
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center'); //facility
        cy.wait(1000);
        cy.get('#chk_hospotal_readmission').click(); //hospital readmission
        cy.wait(1000);
        cy.get('#radio_program_medicaid').click(); //mediclaid
        cy.get('#txt_visit_date').type('03/11/2023'); //date
        cy.wait(1000);
        cy.get('#txt_comment').click({force:true}).type('03/11/2023'); //comment
        cy.get('#btn-book-appointment').click(); //book appointment button
        cy.wait(4000);
    });

    //it('Click on make appointment',function()
    //{
        //cy.get('#btn-make-appointment').click();
    
        //     cy.get('#btn-make-appointment').should('have.attr', 'href').then((href) => 
    //    {
    //      cy.visit('./profile.php#login')
         
    //    })
       //cy.get("a[href='./profile.php#login']").click()
        
    // });

    // it('Login',function()
    // {
        // cy.get('#txt-username').type('John Doe');
        // cy.get('#txt-password').type('ThisIsNotAPassword');
        // cy.get('#btn-login').click();
        // cy.wait(3000);
        
    // });

    // it('Make appointment',function()
    // {

    // });

})