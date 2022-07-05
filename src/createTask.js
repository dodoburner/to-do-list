const taskInput = document.querySelector('.task-input')
const form = document.querySelector('form')
import addTask from './addTask';
import Task from './taskConstructor';

function submit() {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (taskInput.value !== '') {
      let tasks = JSON.parse(localStorage.getItem('storageTasks'));
      tasks = (tasks === null) ? [] :  tasks
      const task = new Task(taskInput.value, tasks.length)
      tasks.push(task)
      localStorage.setItem('storageTasks', JSON.stringify(tasks));
      addTask(task)
      taskInput.value = ''
      console.log(tasks)
    }
  })
}

export default submit
