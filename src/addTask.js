const todoList = document.getElementById('todo-list');

function addTask(el) {
  //creating and appending the task to html//
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
    <input class="check" type="checkbox">
    <input class="task-edit" type="text" class="description" value="${el.description}">
    <i class="fa-solid fa-ellipsis-vertical three-dots"></i>
    <i class="fa-solid fa-trash-can none"></i>
  `;
  todoList.appendChild(task);

  const checkbox = task.children[0]
  const input = task.children[1]
  const trashIcon = task.children[3]

  //checkbox//
  checkbox.addEventListener('click', () => {
    const todoListArray = Array.from(document.getElementById('todo-list').children)
    const index = todoListArray.indexOf(task)
    let tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks[index].completed = checkbox.checked;
    input.classList.toggle('checked');
  });
 
  //adding the trash icon//
  input.addEventListener('click', () => {
    const allTasks = document.querySelectorAll('.task')
    allTasks.forEach((task) => {
      task.children[3].classList.add('none')
      task.children[2].classList.remove('none')
    })
    task.children[3].classList.toggle('none')
    task.children[2].classList.toggle('none')
  })

  //editing the task value//
  input.addEventListener('change', () => {
    const todoListArray = Array.from(document.getElementById('todo-list').children)
    const index = todoListArray.indexOf(task)
    let tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks[index].description = input.value;
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
  })

  //removing the task//
  trashIcon.addEventListener('click', () => {
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