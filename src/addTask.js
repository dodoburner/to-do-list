const todoList = document.getElementById('todo-list');

function addTask(el) {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
    <input class="check" type="checkbox">
    <input class="task-edit" type="text" class="description" value="${el.description}">
    <i class="fa-solid fa-ellipsis-vertical three-dots"></i>
    <i class="fa-solid fa-trash-can none"></i>
  `;
  todoList.appendChild(task);

  task.children[0].addEventListener('click', () => {
    task.children[1].classList.toggle('checked');
  });
 
  task.children[1].addEventListener('click', () => {
    const allTasks = document.querySelectorAll('.task')
    allTasks.forEach((task) => {
      task.children[3].classList.add('none')
      task.children[2].classList.remove('none')
    })
    task.children[3].classList.toggle('none')
    task.children[2].classList.toggle('none')
  })

  task.children[1].addEventListener('change', () => {
    const todoListArray = Array.from(document.getElementById('todo-list').children)
    const index = todoListArray.indexOf(task)
    let tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks[index].description = task.children[1].value;
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
  })

  task.children[3].addEventListener('click', () => {
    let tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks.splice(Array.from(todoList.children).indexOf(task), 1);
    tasks.forEach((task, index) => {
      task.index = index
    }) 
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
    todoList.removeChild(task)
  })
  
}

export default addTask;