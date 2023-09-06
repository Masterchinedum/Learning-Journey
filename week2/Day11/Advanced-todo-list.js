const todoList = [];

const todoNameInput = document.getElementById('todoName');
const dueDateInput = document.getElementById('dueDate');
const addTodoButton = document.getElementById('addTodo');
const todoListContainer = document.getElementById('todoList');

addTodoButton.addEventListener('click', addTodo);

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todo, index) => {
        const { name, dueDate } = todo;
        const html = `
            <p>
                ${name} - Due: ${dueDate}
                <button onclick="deleteTodo(${index})">Delete</button>
            </p>
        `;
        todoListHTML += html;
    });

    todoListContainer.innerHTML = todoListHTML;
}

function addTodo() {
    const name = todoNameInput.value;
    const dueDate = dueDateInput.value;

    if (name && dueDate) {
        todoList.push({ name, dueDate });
        todoNameInput.value = '';
        dueDateInput.value = '';
        renderTodoList();
    } else {
        alert('Please enter both a todo name and a due date.');
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

// Initial rendering
renderTodoList();
