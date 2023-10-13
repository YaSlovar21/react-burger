/// <reference types="cypress" />

import { ceil } from 'cypress/types/lodash';
import {BASE_URL, INGRS_URL, ORDER_URL} from '../../src/utils/constants'

describe('service is available and fixture response success', function() {

    const getModal = () => cy.get('[data-cy=modal-all]')
    const getIngredientContainer = () => cy.get('[data-cy=ingredientsContainer]')
    const getCartContainer = () => cy.get('[data-cy=cartContainer]')
    const getOrderButton = () => cy.get('[data-cy=order-button]');

    it('should be available on localhost:3000', function() {
      cy.visit('http://localhost:3000');
      cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients')
      cy.wait('@getIngredients').its('response.body')
          .should('have.property', 'success', true)
    });

    it('modal with ingregients open and close correctly', () => {
        cy.visit('http://localhost:3000');
        cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients')

        cy.get('[class^=Ingredient_ingredient]').first().click();
        getModal().should('be.visible').within(()=> {
            //модалка открылась с OrderDetails
            cy.get('.ingredients-details')
            cy.get('button').click()
        });
        getModal().should('not.exist')
      });
    
    it('ingredient dragged and dropped to cart', () => {
        cy.visit('http://localhost:3000');
        cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients')
        
        //отпправляем в корзину булку и ингредиент
        getIngredientContainer().contains('Краторная булка N-200i').trigger('dragstart');
        getCartContainer().trigger('drop')
        getIngredientContainer().contains('Соус фирменный Space Sauce').trigger('dragstart');
        getCartContainer().trigger('drop')

        //проверяем счётчик ингредиента (булка х2, ингредиент х1) 
        getIngredientContainer().contains('Краторная булка N-200i').closest('[class^=Ingredient_ingredient__]').within(()=>{
            cy.get('.counter__num').should('have.text', '2')
        })
        getIngredientContainer().contains('Соус фирменный Space Sauce').closest('[class^=Ingredient_ingredient__]').within(()=>{
            cy.get('.counter__num').should('have.text', '1')
        })
        
        //проверяем правильно ли суммировалась totalPrice
        cy.get('.constructor-element__price')
            .then((els$) => Cypress._.map(els$, 'textContent'))
            .then(texts => Cypress._.map(texts, Number))
            .then(numbers => Cypress._.sum(numbers))
            .then(priceTotalFromCart => {
                cy.get('[data-cy=total-price]')
                    .then($total => parseInt($total.text()))
                    .should('eq', priceTotalFromCart)
            })
        
        getOrderButton().click()

        cy.intercept('POST', `${BASE_URL}${ORDER_URL}`, { fixture: 'order-response.json' }).as('getOrderData')
        //логинимся
        cy.get('input').first().type('stanko.tsep@yandex.ru')
        cy.get('input').eq(1).type('12345678')
        cy.get('.login-button').click()

        getOrderButton().click()
        cy.wait('@getOrderData')
        getModal().should('be.visible').within(()=> {
            //модалка открылась с OrderDetails
            cy.get('.order-number')
            cy.get('button').click()
        });
        getModal().should('not.exist')
    })
}); 

