let tasks = [
  {
    description: 'buy ducktape',
    completed: false,
    index: 3
  },
  {
    description: 'conquer the world',
    completed: true,
    index: 4
  },
  {
    description: 'finish the todo list activity',
    completed: false,
    index: 1
  },
  {
    description: 'meet up with Anja in the afternoon',
    completed: false,
    index: 2
  },
]

tasks.sort((a,b) => {
  if (a.index > b.index) {
    return 1
  } else if (a.index < b.index) {
    return -1
  }
})
const todoList = document.getElementById('todo-list')
import './styles.css';
import addTask from './addTask'

function populateTodoList() {
  tasks.forEach((el) => {
    addTask(el)
  })
}

populateTodoList()