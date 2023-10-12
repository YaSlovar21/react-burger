/// <reference types="cypress" />

import {BASE_URL, INGRS_URL} from '../../../src/utils/constants'

describe('service is available and fixture response success', function() {

    const getModalIngredient = () => cy.get('[data-cy=modalIngredient]')
    const getIngredientContainer = () => cy.get('[data-cy=ingredientsContainer]')
    const getCartContainer = () => cy.get('[data-cy=cartContainer]')
    const getOrderButton = () => cy.get('[data-cy=order-button]');

    it('should be available on localhost:3000', function() {
      cy.visit('http://localhost:3000');
      cy.intercept('GET', `${BASE_URL}${INGRS_URL}`, { fixture: 'ingredients.json' }).as('getIngredients')
      cy.wait('@getIngredients').its('response.body')
          .should('have.property', 'success', true)
    });

    it('modal with ingregients open and close correctly', () => {
        cy.visit('http://localhost:3000');

        cy.get('[class^=Ingredient_ingredient]').first().click();
        //хорошо бы сделать рандомное нажатие на несколько ингредиентов и сверить их с реальными данными из фикстуры
        getModalIngredient().should('be.visible').within(()=> {
            //cy.wait(3000)
            cy.get('button').click()
        });
        getModalIngredient().should('not.exist')
      });
    
    it('ingredient dragged and dropped to cart', () => {
        cy.visit('http://localhost:3000');
        getIngredientContainer().contains('Краторная булка N-200i').trigger('dragstart');
        getCartContainer().trigger('drop')
        //проверить счётчик ингредиента 
        //сверить цену в корзине
        getIngredientContainer().contains('Соус фирменный Space Sauce').trigger('dragstart');
        getCartContainer().trigger('drop')
        cy.wait(1000)
        getOrderButton().click()

        //логинимся
        cy.get('input').first().type('stanko.tsep@yandex.ru');
        cy.get('input').eq(1).type('12345678')
        cy.get('.login-button').click()
    })
}); 

