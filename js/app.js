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
                this.ui.renderTodoItems(todoData.items);
            }
        });
    }
}

const app = new App();
app.run();

export default app;