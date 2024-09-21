document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        document.getElementById('todo-list').appendChild(li);

        todoInput.value = '';
    }
});
