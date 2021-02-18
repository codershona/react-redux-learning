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
        // console.log('Please Edit the Button')

        // let mainModal = $('#contactEditModal')
        var mainModal = document.getElementById('#contactEditModal')
        // mainModal.modal('toggle')

        mainModal.toggle()
        // window.$("#contactEditModal").modal("toggle");

        let editName = document.querySelector('#edit-name')
        let editPhone = document.querySelector('#edit-phone')
        let editEmail = document.querySelector('#edit-email')

        editName.value = contact.name
        editPhone.value = contact.phone ? contact.phone : 'N/A'
        editEmail.value = contact.email ? contact.email : ''

        let updateBtn = document.querySelector('#updateContact')
        updateBtn.addEventListener('click', function() {
            axios.put(`${BASE_URL}/${contact.id}`, {
                name: editName.value,
                phone: editPhone.value,
                email: editEmail.value
            })
            .then(res => {
                tdName.innerHTML = res.data.name
                tdPhone.innerHTML = res.data.phone

                tdEmail.innerHTML = res.data.email

                // mainModal.modal('hide')
                mainModal.hide()
            })
            .catch(err => console.log(err))
        })

    })
    tdActions.appendChild(tdEditBtn)

    const tdDeleteBtn = document.createElement('button')
    tdDeleteBtn.className = 'btn btn-warning'
    tdDeleteBtn.innerHTML = 'Delete'
    tdDeleteBtn.addEventListener('click', function() {
        // console.log('Please Delete the Button')
        // console.log(contact)
        axios.delete(`${BASE_URL}/${contact.id}`)
          .then(res => {
              parentElement.removeChild(TR)
          })
          .catch(err => console.log(err))

    })
    tdActions.appendChild(tdDeleteBtn)

    TR.appendChild(tdActions)

    parentElement.appendChild(TR)


}