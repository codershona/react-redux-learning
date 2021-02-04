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

function createNewTasks(parent, tasks) {
    // console.log(tasks)

    let col = create({'class': 'col-sm-3'})

    let single_Tasks = create({'class': 'single_tasks'})

    let single_Task_P = create('p')

    single_Task_P.innerHTML = 'tasks'
    single_Tasks.appendChild(single_Task_P)

    col.appendChild(single_Tasks)
    parent.appendChild(col)
    
}




window.create = function () {

    if (arguments.length === 0) {
        return document.createElement('div');
    }

    if (arguments.length === 1 && typeof arguments[0] != 'object') {
        return document.createElement(arguments[0]);
    }

    var tag = arguments[0];
    var attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        tag = 'div';
    }

    var element = document.createElement(tag);

    for (var i in attr) {
        element.setAttribute(i, attr[i]);
    }

    return element;
}