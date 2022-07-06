const clearBnt = document.querySelector('.clear');

function clearAll() {
  clearBnt.addEventListener('click', () => {
    const todoList = document.getElementById('todo-list');
    const todoListArray = Array.from(todoList.children)
    let tasks = JSON.parse(localStorage.getItem('storageTasks'));

    todoListArray.forEach((task, index) => {
      const input = task.children[1];
      if (input.classList.contains('checked')) {
        todoList.removeChild(task)
      }
    })
    
    tasks = tasks.filter((task) => !task.completed)
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
  });
}

export default clearAll;
