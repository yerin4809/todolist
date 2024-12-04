const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  taskList.appendChild(li);
  taskInput.value = '';

  taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });
  
});
