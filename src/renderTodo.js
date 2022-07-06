import addTask from './addTask';

const renderTodo = () => {
  const dataFromStorage = JSON.parse(localStorage.getItem('storageTasks'));
  const tasks = (dataFromStorage === null) ? [] : dataFromStorage;
  tasks.forEach((task) => {
    addTask(task);
  });
};

export default renderTodo;