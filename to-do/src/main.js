import {addTask, getTasks} from './modules/todoManager.js';

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');


taskForm.addEventListener('submit', (e) =>{
  e.preventDefault(); //evitamos que la pagina se recarga
  const texto = taskInput.value;
  addTask(texto);
  renderTask();
  taskInput.value = '';
  
});

const  taskList = document.getElementById('taskList');
const renderTask = () =>{
  let tasks = getTasks();
  taskList.innerHTML = '';
  tasks.forEach(task => {
    let li = document.createElement('li');
    li.textContent = task.description;
    taskList.appendChild(li);
  });
}


