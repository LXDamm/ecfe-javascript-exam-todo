import UI from './ui.js';

class App {
    constructor() {
        this.todoDataUrl = './todo-data.json';
        this.todoItems = [];
        this.ui = new UI();
    }
    addEventListeners() {
        this.ui.addEventListeners();
    }
    async fetchTodo() {
        try {
            const res = await fetch(this.todoDataUrl);
            return await res.json();
        } catch (error) {
            console.log(error);
        }

    }
    run() {
        this.addEventListeners();
        this.fetchTodo().then((todoData) => {
            console.log(todoData);
            if (todoData) {
                this.ui.renderTodoItems(todoData.items);
            }
        });
    }
}

const app = new App();
app.run();

export default app;