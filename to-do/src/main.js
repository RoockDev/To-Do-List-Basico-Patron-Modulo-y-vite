import {addTask, deleteTask, getTasks, toggleTask} from './modules/todoManager.js';
import './style.css';

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
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    //cambiar estado tarea si cambia checkbox
    checkbox.onchange = () => {
      toggleTask(task.id);
      renderTask();
    }
    
    li.appendChild(checkbox);
    let span = document.createElement('span');
    span.textContent = task.description;
    if (task.completed) {
      span.style.textDecoration = 'line-through';
    }

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click',() =>{
      deleteTask(task.id);
      renderTask();
    });
    
    
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}


