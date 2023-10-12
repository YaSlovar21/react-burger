/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    cy.visit('/')
  })

  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    // Мы используем команду `cy.get()`, чтобы получить все элементы, соответствующие селектору.
    // Затем мы используем `should`, чтобы утверждать, что есть два совпадающих элемента,
    // которые являются двумя элементами по умолчанию.
    cy.get('.todo-list li').should('have.length', 2)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    // Мы можем пойти еще дальше и проверить, что каждый из задач по умолчанию содержит
    // правильный текст. Мы используем функции `first` и `last`
    // чтобы получить только первый и последний совпадающие элементы по отдельности,
    // а затем выполнить утверждение с помощью `should`.
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('can add new todo items', () => {
    // Мы сохраним текст нашего элемента в переменной, чтобы мы могли использовать его повторно
    const newItem = 'Feed the cat'

    // Давайте получим элемент ввода и воспользуемся командой `type`, чтобы
    // ввести наш новый элемент списка. После ввода содержимого нашего товара,
    // нам также нужно ввести клавишу enter, чтобы отправить вводимые данные.
    // Эти входные данные имеют атрибут data-test, поэтому мы будем использовать его для выбора элемента
    // в соответствии с рекомендациями:
    // https://on.cypress.io/selecting-elements
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    // Теперь, когда мы ввели наш новый элемент, давайте проверим, действительно ли он был добавлен в список.
    // Поскольку это самый новый элемент, он должен существовать как последний элемент в списке.
    // Кроме того, с двумя элементами по умолчанию у нас должно быть в общей сложности 3 элемента в списке.
    // Поскольку утверждения приводят к элементу, который был утвержден,
    // мы можем объединить оба этих утверждения в одно утверждение.
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    // В дополнение к использованию команды `get` для получения элемента по селектору,
    // мы также можем использовать команду `contains` для получения элемента по его содержимому.
    // Однако это приведет к получению <label>, который является элементом самого низкого уровня, содержащим текст.
    // Чтобы проверить элемент, мы найдем элемент <input> для этого <label>
    // путем перемещения вверх по dom к родительскому элементу. Оттуда мы можем `найти`
    // дочерний элемент checkbox <input> и используйте команду "проверить", чтобы проверить его.
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    // Теперь, когда мы проверили кнопку, мы можем пойти дальше и убедиться
    // что элемент списка теперь помечен как завершенный.
    // Снова мы будем использовать `contains`, чтобы найти элемент <label>, а затем воспользуемся командой `parents`
    // чтобы пройти несколько уровней вверх по dom, пока мы не найдем соответствующий элемент <li>.
    // Как только мы получим этот элемент, мы можем утверждать, что у него есть завершенный класс.
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      // Мы воспользуемся командой, которую использовали выше, чтобы отметить элемент
      // Поскольку мы хотим выполнить несколько тестов, которые начинаются с проверки
      // один элемент, мы помещаем его в хук beforeEach
      // так, чтобы он запускался в начале каждого теста.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      // Мы нажмем на кнопку "активно", чтобы
      // отображать только неполные элементы
      cy.contains('Active').click()

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      // После фильтрации мы можем утверждать, что в списке есть только один
      // неполный элемент.
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      // Для пущей убедительности давайте также предположим, что задача, которую мы отметили галочкой
      //, не существует на странице.
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      // Мы можем выполнить действия, аналогичные описанному выше тесту, чтобы убедиться
      // что отображаются только завершенные задачи
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      // Сначала давайте нажмем кнопку "Очистить завершено".
      // "содержит" на самом деле служит здесь двум целям.
      // // Во-первых, это гарантирует, что кнопка существует внутри dom.
      // Эта кнопка появляется только тогда, когда отмечена хотя бы одна задача
      // таким образом, эта команда неявно проверяет, что она действительно существует.
      // Во-вторых, он выбирает кнопку, чтобы мы могли нажать на нее.
      cy.contains('Clear completed').click()

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      // Тогда мы можем убедиться, что существует только один элемент
      // в списке и наш элемент не существует
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      // Finally, make sure that the clear button no longer exists.
      // Наконец, убедитесь, что кнопка очистить больше не существует.
      cy.contains('Clear completed').should('not.exist')
    })
  })
})
