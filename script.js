function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    // Check if the input is not empty
    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        li.remove();
    };

    // Append button to list item and list item to list
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = '';
}