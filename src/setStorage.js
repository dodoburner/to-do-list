import addTask from './addTask';

const setStorage = () => {
  const dataFromStorage = JSON.parse(localStorage.getItem('storageTasks'));
  const tasks = (dataFromStorage === null) ? [] : dataFromStorage;
  tasks.forEach((task) => {
    addTask(task);
  });
};

export default setStorage;