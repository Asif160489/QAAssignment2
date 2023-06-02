///<reference types="cypress" />

describe('login test', () => {
  it('login testyou', () => {
    cy.visit('https://www.testyou.in/Login.aspx')
    //cy.get('#ctl00_indexLogin2_txtUserLogin').type('asif2468');
    //cy.get('#ctl00_indexLogin2_txtPassword').type('pass2468');
    //cy.get('#ctl00_indexLogin2_lnkbtnSiginIn').should('be.visible').contains('LOGIN').click();
    cy.get('#ctl00_indexLogin2_hprlnkForgetPassword').click({ force: true });
    cy.wait(3000)
  })
  /*
   it('terms and condition', () => {
     //cy.get('div.grid_4  > ul > li:nth-child(5) > a')
     //.should('have.attr', 'href').and('include', 'Terms & Conditions').click()
     //cy.get('div.grid_4').as("a").get("@href").should('have.attr', 'href').and('include', 'Terms & Conditions').click()
     cy.get("a[target = '_blank']").click()
   })
   */
})

