import UI from './ui.js';

class App {
    constructor() {
        this.todoDataUrl = './todo-data.json';
        this.todoItems = [];
        this.ui = new UI();
    }
    addEventListeners() {
        this.ui.todoAddBtnE.addEventListener('click', (event) => {
            this.addTodoItem(this.ui.getTodoInput());
            this.update();
        });
        document.addEventListener('todo-list-event-done', (event) => {
            this.todoItems[event.detail].done = true;
            this.update();
        });
        document.addEventListener('todo-list-event-delete', (event) => {
            this.todoItems.splice(event.detail, 1);
        });
    }
    addTodoItem(providedTitle) {
        const item = { title: providedTitle, checked: false };
        this.todoItems.push(item);
        console.log(this.todoItems);
    }
    async fetchTodo() {
        try {
            const res = await fetch(this.todoDataUrl);
            return await res.json();
        } catch (error) {
            console.log(error);
        }

    }
    update() {
        this.ui.renderTodoItems(this.todoItems);
    }
    run() {
        this.addEventListeners();
        this.fetchTodo().then((todoData) => {
            console.log(todoData);
            if (todoData) {
                this.todoItems = todoData.items;
                this.ui.updateTodoItems(this.todoItems);
                this.ui.renderTodoItems();
            }
        });
    }
}

const app = new App();
app.run();

export default app;