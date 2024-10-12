document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', 
   (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    addTask(); 

    // Create the ADD TASK function
    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText = '') {
            alert("Please enter a task");
        }
        else {
            const li = document.createElement('li');
            li.textContent = taskText;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener(click, () => {
                taskList.removeChild(li);
            });
            li.appendChild(removeButton);
            taskList.appendChild(li);
            
            taskInput.value = '';
        }
    }
  });