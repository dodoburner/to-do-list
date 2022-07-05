const todoList = document.getElementById('todo-list');

function addTask(el) {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
    <input class="check" type="checkbox">
    <p class="description" >${el.description}</p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  `;
  todoList.appendChild(task);

  task.children[0].addEventListener('click', () => {
    task.children[1].classList.toggle('checked');
  });
}

export default addTask;