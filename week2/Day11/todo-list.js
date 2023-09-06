const todoList = [{
name: 'make dinner',
dueDate: '2023-09-06'
},
{
name: 'wash dishes',
dueDate: '2023-09-06'
}
];
renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i= 0; i< todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        const { name } = todoObject;
        const dueDate = todoObject.dueDate;
        const html = `
        <p>
        ${name} ${dueDate}
         <button onclick= "
         todoList.splice(${i}, 1);
         renderTodoList();
         "> Delete </button>
        </p>`
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
};

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-input');
    const dueDate = dateInputElement.value;

    todoList.push( {
        //name:name,
        //dueDate:dueDate
        name,
        dueDate
    })

    inputElement.value = '';
    renderTodoList();
}