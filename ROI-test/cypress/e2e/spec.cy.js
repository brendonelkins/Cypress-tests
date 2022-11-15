/// <reference types="Cypress" />

describe('ROI Hunter test', () => {

  it('Checks that all columns are present', () => {
    cy.visit('https://bug-hunt.roihunter.com/')
    cy.get('thead')
      .should('contain', 'id')
      .and('contain', 'Name')
      .and('contain', 'Revenue')
      .and('contain', 'CPC')
      .and('contain', 'Impressions')
      .and('contain', 'Spend')
      .and('contain', 'Clicks')
  })

  it('Verifies the search is working', () => {
    cy.visit('https://bug-hunt.roihunter.com/')

    cy.get('.rh-input')
      .type('item name #0')
      .should('have.value', 'item name #0')

    cy.get('tbody')
      .contains('item name #0', { matchCase: false })

  })

  it('Selects a currency from the dropdown to update the relevant columns', () => {
    cy.visit('https://bug-hunt.roihunter.com/')

    cy.get('.Select-value').click()

    cy.contains('Czech koruna').click()

    cy.get('tbody tr').eq(0)
      .find('td').eq(2)
      .should('contain', 'CZK')

    cy.get('tbody tr').eq(0)
      .find('td').eq(5)
      .should('contain', 'CZK')

  })

  it('Checks columns can sort in ascending and descending order', () => {
    cy.visit('https://bug-hunt.roihunter.com/')

    cy.get('thead').contains('id').click()

    cy.get('tbody tr td:nth-child(1)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => a - b))
      })

    cy.get('thead').contains('id').click()

    cy.get('tbody tr td:nth-child(1)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => b - a))
      })

    cy.get('thead').contains('Revenue').click()

    cy.get('tbody tr td:nth-child(3)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => a - b))
      })

    cy.get('thead').contains('Revenue').click()

    cy.get('tbody tr td:nth-child(3)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => b - a))
      })

    cy.get('thead').contains('CPC').click()

    cy.get('tbody tr td:nth-child(4)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => a - b))
      })

    cy.get('thead').contains('CPC').click()

    cy.get('tbody tr td:nth-child(4)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => b - a))
      })

    cy.get('thead').contains('Impressions').click()

    cy.get('tbody tr td:nth-child(5)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => a - b))
      })

    cy.get('thead').contains('Impressions').click()

    cy.get('tbody tr td:nth-child(5)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => b - a))
      })

    cy.get('thead').contains('Spend').click()

    cy.get('tbody tr td:nth-child(6)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => a - b))
      })

    cy.get('thead').contains('Spend').click()

    cy.get('tbody tr td:nth-child(6)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(parseInt(item[i].innerHTML))
          sortedColumn.push(parseInt(item[i].innerHTML))
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort((a, b) => b - a))
      })

    cy.get('thead').contains('Name').click()

    cy.get('tbody tr td:nth-child(2)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []
        for (let i = 0; i < item.length; i++) {
          columnValues.push(item[i].innerHTML)
          sortedColumn.push(item[i].innerHTML)
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort())
      })

    cy.get('thead').contains('Name').click()

    cy.get('tbody tr td:nth-child(2)')
      .then(item => {
        const columnValues = []
        const sortedColumn = []

        for (let i = 0; i < item.length; i++) {
          columnValues.push(item[i].innerHTML)
          sortedColumn.push(item[i].innerHTML)
        }
        cy.wrap(columnValues).should('deep.equal', sortedColumn.sort().reverse())
      })
  })

})