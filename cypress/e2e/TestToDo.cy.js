describe('Test ToDo', () => {
    it(' Comprobar que al marcar tareas el filtro Completed funciona correctamente', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get(' .new-todo').type('tarea 1{enter}')
      cy.get(' .new-todo').type('tarea 2{enter}')
      cy.get(' .new-todo').type('tarea 3{enter}')
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
      cy.get('[data-testid="todo-item-label"]').should("be.visible")
    })
    it(' Comprobar que al marcar tareas el filtro Active funciona correctamente', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get(' .new-todo').type('tarea 1{enter}')
      cy.get(' .new-todo').type('tarea 2{enter}')
      cy.get(' .new-todo').type('tarea 3{enter}')
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
      cy.get(':nth-child(2) > a').click()
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should("be.visible")
      cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should("be.visible")
    })
    it('Agregar dos tareas con el mismo nombre', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get(' .new-todo').type('tarea 1{enter}')
      cy.get(' .new-todo').type('tarea 1{enter}')
    })
    })