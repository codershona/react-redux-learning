// import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

// alert('Hello Catians')

import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users'

let btn = document.querySelector('#loadingData')
let p = document.querySelector('#output')

btn.addEventListener('click', function() {
//   fetch(URL)
// //  .then(res => console.log(res.json()))
// .then(res => res.json())
// // .then(data => console.log(data))
// .then(data => {
//   // p.innerHTML = `${p.innerHTML} <br> Name: `
//   data.forEach((user) => {
//     p.innerHTML = `${p.innerHTML} <br> Name: ${user.name}`;
//   })
// })
//   .catch(err => console.log(err));

// using axios :

axios.get(URL)
.then(res => {
  res.data.forEach(user => {
    p.innerHTML = `${p.innerHTML} <br> Name: ${user.name}`;
  });
})
  .catch(err => console.log(err));
});

// if we want to post the data

// fetch(URL, {
//   method: 'POST',
//   body: JSON.stringify()

// })





// btn.addEventListener('click', function() {
//     const xhr = new XMLHttpRequest()

//    xhr.onreadystatechange = () => {
//     // console.log(xhr.response)
//     p.innerHTML = xhr.response
//  }

//   xhr.open('GET', URL)

//   xhr.send()
// })






