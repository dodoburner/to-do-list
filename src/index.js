import './styles.css';
import addTask from './addTask';
import setStorage from './setStorage'

setStorage()
const tasks = [
];

export { tasks };

tasks.sort((a, b) => a.index - b.index);

function populateTodoList() {
  tasks.forEach((el) => {
    addTask(el);
  });
}

populateTodoList();