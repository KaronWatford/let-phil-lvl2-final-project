const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo,index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            updateStorage();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function updateStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push(todoInput.value.trim());
    todoInput.value = '';
    updateStorage();
});

renderTodos();