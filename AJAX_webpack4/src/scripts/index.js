import axios from 'axios';
import '../scripts/index.scss';


const BASE_URL = 'http://localhost:3000/contacts'

window.onload = function() {

    let tbody = document.querySelector('#tbody')

    axios.get(BASE_URL)
    .then(res => {
        res.data.forEach(contact => {
            createTDElement(contact, tbody)
        })
    })
    .catch()

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
        console.log('Please Delete the Button')
    })
    tdActions.appendChild(tdDeleteBtn)

    TR.appendChild(tdActions)

    parentElement.appendChild(TR)


}