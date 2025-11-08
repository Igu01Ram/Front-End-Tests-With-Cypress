describe('Testes de automação com front end no site SauceDemo na rota do carrinho ', () =>{

    it ('Adicionar 1 produto ao carrinho > Contador do carrinho = 1', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('Adicionar 2 produtos ao carrinho > Contador do carrinho = 2', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '2')
    })

    it('Remover produto do carrinho > Carrinho atualiza corretamente', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')
    })

    it('Visualizar carrinho > Itens adicionados são exibidos corretamente', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')    
        cy.get('#login-button').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.cart_item').should('have.length', 1)
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    })
})