describe ('Testes de automação com front end no site SauceDemo na rota do login', () =>{

    it('Login com credenciais válidas > Redirecionar para página de produtos', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
    })

    it('Login com senha inválida > Exibir mensagem de erro', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('wrong_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
    
    it ('Login com usuário bloqueado > Exibir mensagem “user has been locked out”', () =>{
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Login com campos vazios > Impedir login e exibir alerta', () =>{
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required')
    })

})
