const taskInput = document.querySelector('.task-input')
const taskSubmit = document.querySelector('.submit-task')
const form =  document.querySelector('form')
import { tasks } from "./index"

class Task {
  constructor(value, index) {
    this.description = value,
    this.completed = false,
    this.index = index
  }
}

form.addEventListener('submit', () => {
  if (taskInput.value !== '') {
    const task = new Task(taskInput.value, tasks.length-1) 
  }
})