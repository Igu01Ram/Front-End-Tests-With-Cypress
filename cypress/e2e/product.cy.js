describe('Testes de automação com front end no site SauceDemo na rota de produtos', () =>{

    it ('Validar exibição da lista de produtos > Todos os produtos aparecem após login bem-sucedido', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_item').should('have.length', 6)
    })
    
    it ('○ Ordenação A → Z > Produtos em ordem alfabética crescente', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Name (A to Z)')
        cy.get('.inventory_item_name').then(items => {
            const names = [...items].map(item => item.innerText)
            const sortedNames = [...names].sort()
            expect(names).to.deep.equal(sortedNames)
        })
    })

    it ('○ Ordenação Z → A > Produtos em ordem alfabética decrescente', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.inventory_item_name').then(items => {
            const names = [...items].map(item => item.innerText)
            const sortedNames = [...names].sort().reverse()
            expect(names).to.deep.equal(sortedNames)
        })
    })
})