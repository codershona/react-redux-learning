// working with Dom: Creating and Deleting DOM

let idField = document.querySelector('#idField')

let ul = document.querySelector('#idList')

idField.addEventListener('keypress', function(event) {

    // console.log(event)
    if (event.keyCode === 13) {
        // console.log('Please type here!..')

        // let name = event.target.value
        // console.log(name)
        let id = event.target.value
        // console.log(id)
        ul.appendChild(createLi(id))

        event.target.value = ""



    }

})

function createLi(id) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = id

    return li
}



