document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            addDeleteEvent(taskItem.querySelector('.deleteBtn'));
        }
    });

    function addDeleteEvent(button) {
        button.addEventListener('click', () => {
            const taskItem = button.parentElement;
            taskList.removeChild(taskItem);
        });
    }
});
