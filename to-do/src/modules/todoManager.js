export {addTask, getTasks, toggleTask,deleteTask};
let task = [];

const addTask = (description) => {
  if (description.trim() === "") return; // si ingresan una tarea vacia no la guardamos
  task.push({
    //guardamos un objeto literal con la tarea
    id: Date.now(),
    description: description.trim(),
    completed: false,
  });
  
};

const getTasks = () =>{
    return [...task]; //devolvemos una copia del array de tareas
};

const toggleTask = (id) => {
  let foundTask = task.find(task => task.id === id);
  if (foundTask) {
    foundTask.completed = !foundTask.completed;
  }
};

const deleteTask = (id) => {
  task = task.filter(task => task.id !== id);
}


