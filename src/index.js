import './styles.css';
import addTask from './addTask';
import setStorage from './setStorage'
import submit from './createTask'

let tasks = [];
tasks.sort((a, b) => a.index - b.index);

function populateTodoList() {
  tasks.forEach((el) => {
    addTask(el);
  });
}

setStorage()
submit()
populateTodoList();