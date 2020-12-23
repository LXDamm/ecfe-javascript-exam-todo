class UI {
    constructor() {
        this.todoItemsListE = document.querySelector('#todo-items-list');
        this.addBtnE = document.querySelector('#todo-add-button');
    }
    addEventListeners() {

    }
    renderTodoItems(todoItems) {
        let html = '';
        todoItems.forEach(item => {
            if (item.done) {
                html += '<img src="./icons/check2-circle.svg" alt="" width="32" height="32">';
            } else {
                html += '<span>-</span>';
            }
            html += `<span>${item.title}</span>`;
        });
        this.todoItemsListE.innerHTML = html;
    }
}

export default UI;