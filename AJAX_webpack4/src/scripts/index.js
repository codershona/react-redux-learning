import axios from 'axios';
import '../scripts/index.scss';


const BASE_URL = 'http://localhost:3000/contacts'

window.onload = function() {

    let tbody = document.querySelector('#tbody')

    // getting data from server and filled the tables when page has been loaded
    axios.get(BASE_URL)
    .then(res => {
        res.data.forEach(contact => {
            createTDElement(contact, tbody)
        })
    })
    .catch()

    // I had been added the eventListener method to saved my contacts button

    let saveContactBtn = document.querySelector('#saveContact')
    saveContactBtn.addEventListener('click', function() {
        createNewContact()
    })

}

// Create New post method function to posts contacts details

function createNewContact() {

     let nameFields = document.querySelector("#nameFields")
     let phoneFields = document.querySelector("#phoneFields")
     let emailFields = document.querySelector("#emailFields")

     let contact = {
        name: nameFields.value,
        phone: phoneFields.value,
        email: emailFields.value
    }
    axios.post(BASE_URL, contact)
     .then(res => {
         let tbody = document.querySelector('#tbody')
         createTDElement(res.data, tbody)

         nameFields.value = ''
         phoneFields.value = ''
         emailFields.value = ''

     })
     .catch(err => console.log(err))
}



// Now I am creating TR element & appending for the parentElement

function createTDElement(contact, parentElement) {
    
    const TR = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerHTML = contact.name
    TR.appendChild(tdName)

    const tdPhone = document.createElement('td')
    tdPhone.innerHTML = contact.phone ? contact.phone : 'NOT AVAILABLE'
    TR.appendChild(tdPhone)

    const tdEmail = document.createElement('td')
    tdEmail.innerHTML = contact.email ? contact.email : 'N/A'
    TR.appendChild(tdEmail)

    const tdActions = document.createElement('td')

    const tdEditBtn = document.createElement('button')
    tdEditBtn.className = 'btn btn-secondary mx-1'
    tdEditBtn.innerHTML = 'Edit'
    tdEditBtn.addEventListener('click', function() {
        console.log('Please Edit the Button')
    })
    tdActions.appendChild(tdEditBtn)

    const tdDeleteBtn = document.createElement('button')
    tdDeleteBtn.className = 'btn btn-warning'
    tdDeleteBtn.innerHTML = 'Delete'
    tdDeleteBtn.addEventListener('click', function() {
        // console.log('Please Delete the Button')
        console.log(contact)
    })
    tdActions.appendChild(tdDeleteBtn)

    TR.appendChild(tdActions)

    parentElement.appendChild(TR)


}