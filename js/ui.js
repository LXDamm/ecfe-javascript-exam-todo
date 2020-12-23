class UI {
    constructor() {
        this.todoTextinputE = document.querySelector('#todo-text-input');
        this.todoAddBtnE = document.querySelector('#todo-add-button');
        this.todoItemsListE = document.querySelector('#todo-items-list');
    }
    getTodoInput() {
        const title = this.todoTextinputE.value;
        return title;
    }
    renderTodoItems(todoItems) {
        let ulHtml = '';
        for (let i = 0; i < todoItems.length; i++) {
            let doneIconE = document.createElement('a');
            doneIconE.setAttribute('id', 'todo-item-' + i);
            if (todoItems[i].done) {
                doneIconE.innerHTML += '<img src="../icons/check2-circle.svg" alt="" width="24" height="24">';
            } else {
                doneIconE.innerHTML += '<img src="../icons/circle.svg" alt="" width="24" height="24">';
            }
            ulHtml += `<li id="todo-item-${i}"><div><span>${doneIconE}</span><span>${todoItems[i].title}</span></div></li>`;
        }
        this.todoItemsListE.innerHTML = ulHtml;

    }
    addEventListeners() {
    }
}

export default UI;