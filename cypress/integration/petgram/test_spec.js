/* global describe, it, cy */
describe('Petgram', function () {
  it('Saber si la app funciona', function (){
    cy.visit('/')
  })

  it('Navegacion a categoria', function (){
    cy.visit('/category/3')
    cy.get('article')
  })

  it('Navegacion por medio de Navbar a Home', function (){
    cy.visit('/category/3')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function (){
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })

  it('Usuarios no registrados ven el formulario de registro e inicio de sesion al ir a user', function (){
    cy.visit('/user')
    cy.get('form').should('have.length', 2)
  })
})
