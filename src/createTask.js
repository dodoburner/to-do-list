const taskInput = document.querySelector('.task-input')
const form = document.querySelector('form')
let tasks = JSON.parse(localStorage.getItem('storageTasks'));
tasks = (tasks === null) ? [] :  tasks
import addTask from './addTask';
import Task from './classConstructor';

function submit() {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (taskInput.value !== '') {
      const task = new Task(taskInput.value, tasks.length)
      tasks.push(task)
      localStorage.setItem('storageTasks', JSON.stringify(tasks));
      addTask(task)
      taskInput.value = ''
    }
  })
}

export default submit
