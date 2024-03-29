class UI {
    constructor() {
        this.todoTextinputE = document.querySelector('#todo-text-input');
        this.todoAddBtnE = document.querySelector('#todo-add-button');
        this.todoItemsListE = document.querySelector('#todo-items-list');
        this.todoItems = [];
    }
    getTodoInput() {
        const title = this.todoTextinputE.value;
        return title;
    }
    updateTodoItems(todoItems) {
        this.todoItems = todoItems;
    }
    renderTodoItems() {
        let ulHtml = '';
        for (let i = 0; i < this.todoItems.length; i++) {
            let doneIconHtml;
            let deleteIconHtml;
            if (this.todoItems[i].done) {
                doneIconHtml = `<a href="#" id="todo-item-done-${i}"><img src="../icons/check2-circle.svg" alt="" width="24" height="24"></a>`;
            } else {
                doneIconHtml = `<a href="#" id="todo-item-done-${i}"><img src="../icons/circle.svg" alt="" width="24" height="24"></a>`;
            }
            deleteIconHtml = `<a href="#" id="todo-item-delete-${i}"><img src="../icons/trash2.svg" alt="" width="24" height="24"></a>`;
            ulHtml += `<li id="todo-item-${i}" class="todo-list-item"><div class="item"><span class="item-done">${doneIconHtml}</span><span class="item-title">${this.todoItems[i].title}</span><span class="item-delete">${deleteIconHtml}</span></div></li>`;
        }
        this.todoItemsListE.innerHTML = ulHtml;
        this.addEventListeners();
    }
    addEventListeners() {
        for (let i = 0; i < this.todoItems.length; i++) {
            let doneE = document.querySelector('#todo-item-done-' + i);
            doneE.addEventListener('click', (event) => {
                const doneEvent = new CustomEvent('todo-list-event-done', { detail: i });
                document.dispatchEvent(doneEvent);
            });
            let deleteE = document.querySelector('#todo-item-delete-' + i);
            deleteE.addEventListener('click', (event) => {
                const deleteEvent = new CustomEvent('todo-list-event-delete', { detail: i });
                document.dispatchEvent(deleteEvent);
            });
        }
    }
}

export default UI;