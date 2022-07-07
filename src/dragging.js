export default class Dragging {

  dragStart(task) {
    task.addEventListener('dragstart', () => {
      task.classList.add('dragging')
      console.log('start')
    })
  }

  dragEnd(task) {
    task.addEventListener('dragend', () => {
      task.classList.remove('dragging')
      console.log('end')
    })
  }

  dragOver(container) {
    container.addEventListener('dragover', (e) => {
      e.preventDefault()
      console.log('over')
    })
  }
}
