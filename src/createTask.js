import addTask from './addTask';
import Task from './taskConstructor';

const taskInput = document.querySelector('.task-input');
const form = document.querySelector('form');

function submit() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value !== '') {
      let tasks = JSON.parse(localStorage.getItem('storageTasks'));
      tasks = (tasks === null) ? [] : tasks;
      const task = new Task(taskInput.value, tasks.length);
      tasks.push(task);
      localStorage.setItem('storageTasks', JSON.stringify(tasks));
      addTask(task);
      taskInput.value = '';
    }
  });
}

export default submit;
