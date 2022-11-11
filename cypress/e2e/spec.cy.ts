describe('Blog', () => {
    
    it('should navigate to first blog and back home using logo', () => {
        cy.visit('http://localhost:3000')
        cy.get('a[href="/blog/1"]').click()
        cy.url().should('include', '/blog/1')
        cy.get('[data-testid="blog-view"]').within(() => {
            cy.get('[data-testid="blog-title"]').contains('Test')
            cy.get('[data-testid="publish"]')
            cy.get('[data-testid="content"]').within(() => {
                cy.get('[data-testid="content-1"]')
                cy.get('[data-testid="content-2"]')
            })
            }
        )
        cy.get('[data-testid="logoContainer"]').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})

describe('Home', () => {
    it('should have sidebar with logo, top bar with title, and blog list', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="sideBar"]').within(() =>{
            cy.get('[data-testid="logoContainer"]').within(() => {
                cy.get('img[alt="logo"]')
            })
        })
        cy.get('[data-testid="topBar"]').within(() => {
            cy.get('[data-testid="title"]')
        })
        cy.get('[data-testid="blogs"]').within(() => {
            cy.get('a[href="/blog/1"]')
        })
        
    })
})