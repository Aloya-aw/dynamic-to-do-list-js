document.addEventListener('DOMContentLoaded', () => {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(task => addTask(task, 
            false));
        }
    }
    loadTasks();

    // Add event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', 
   (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // addTask(); 

    // Create the ADD TASK function
    function addTask(taskText, save = true) {
        taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
            
            taskInput.value = '';

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }
        else {
            alert("Please enter a task");
        }
    }

    tasks.forEach(task => addTask(task, false));
    
    function removeTask(taskElement) {
        const taskIndex = tasks.indexOf(taskElement.textContent);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
  });