// // working with Dom: Creating and Deleting DOM

// let idField = document.querySelector('#idField')

// let ul = document.querySelector('#idList')

// idField.addEventListener('keypress', function(event) {

//     // console.log(event)
//     if (event.keyCode === 13) {
//         // console.log('Please type here!..')

//         // let name = event.target.value
//         // console.log(name)
//         let id = event.target.value
//         // console.log(id)
//         // ul.appendChild(createLi(id))
//         createLi(ul, id)

//         event.target.value = ""



//     }

// })

// function createLi(ul, id) {
//     let li = document.createElement('li')
//     li.className = "list-group-item d-flex"
//     li.innerHTML = id

//     let span = document.createElement('span')

//     span.innerHTML = 'DELETE'
//     span.className = 'ml-auto'
//     span.style.color = 'orange'
//     span.style.cursor = 'pointer'

//     span.addEventListener('click', function() {

//         // alert('Delete style was not working')
//         ul.removeChild(li)
//     })

//     li.appendChild(span)

//     // return li
//     ul.appendChild(li)
// }



