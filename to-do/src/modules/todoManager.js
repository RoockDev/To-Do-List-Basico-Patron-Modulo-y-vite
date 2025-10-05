export {addTask, getTasks};
let task = [];

const addTask = (description) => {
  if (description.trim() === "") return; // si ingresan una tarea vacia no la guardamos
  task.push({
    //guardamos un objeto literal con la tarea
    id: Date.now(),
    description: description.trim(),
    completed: false,
  });
  console.log('ejecutado');
};

const getTasks = () =>{
    return [...task]; //devolvemos una copia del array de tareas
};
