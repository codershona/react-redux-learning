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
    // creating single tasks using paragraph
    let col = create({'class': 'col-sm-3'})

    let single_Tasks = create({'class': 'single_tasks d-flex'})

    let single_Task_P = create('p')

    single_Task_P.innerHTML = tasks
    single_Tasks.appendChild(single_Task_P)

    // adding close button to close the tasks
    let span = create('span', {'class': 'ml-auto'})
    span.innerHTML = `<i class="fas fa-window-close"></i>`
    // removing the column by using removeChild method
    span.addEventListener('click', function() {
      parent.removeChild(col)
    })

    single_Tasks.appendChild(span)

    // creating tasks controller
    let Task_Controller = createTasksController(single_Tasks)
     // task_controller styles
    Task_Controller.style.visibility = 'hidden'
    single_Tasks.appendChild(Task_Controller)

    // cursor pointer button visible
    single_Tasks.onmouseenter = function() {
        Task_Controller.style.visibility = 'visible'
       // console.log('mouse enter')
    }

    // cursor pointer button hidden
    single_Tasks.onmouseleave = function() {
        Task_Controller.style.visibility = 'hidden'
    }


    col.appendChild(single_Tasks)
    parent.appendChild(col)

}



function createTasksController(parent) {
    let Control_Panel = create({'class': 'tasks_controller_panel'})
    // trying to work with edit
    let Color_Pallete = createColorPallete(parent)
    Control_Panel.appendChild(Color_Pallete)



    return Control_Panel
}


function createColorPallete() {
    const colors = ['skyblue', 'powderblue', 'salmon', 'white', 'grey', 'pink']

       let colorDiv = create({'class': 'd-flex'})

       colors.forEach(color => {
           let div = create({'class': 'colors_circle'})
           div.style.background = color
           colorDiv.appendChild(div)

       })

       return colorDiv
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