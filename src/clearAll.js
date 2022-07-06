const clearBnt = document.querySelector('.clear');

function clearAll() {
  clearBnt.addEventListener('click', () => {
    const todoList = document.getElementById('todo-list');
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
    localStorage.clear();
  });
}

export default clearAll;
