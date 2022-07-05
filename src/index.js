import './styles.css';
import addTask from './addTask';

const tasks = [
];

tasks.sort((a, b) => a.index - b.index);

function populateTodoList() {
  tasks.forEach((el) => {
    addTask(el);
  });
}

populateTodoList();