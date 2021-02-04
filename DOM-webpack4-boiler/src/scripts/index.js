import '../styles/index.scss';

window.onload = function() {

   const taskField = document.querySelector('#tasksField')

   const addTasksButton = document.querySelector('#addTasksButton')

   const all_TaskParent = document.querySelector('#all_Task')

   tasksField.addEventListener('keypress', function() {
       if (event.keyCode === 13) {
        //    console.log('Type New Pressed')
        createNewTasks(all_TaskParent, event.target.value)
        this.value = ''

       }
   })

}

function createNewTasks(parent, task) {
    console.log(task)
}