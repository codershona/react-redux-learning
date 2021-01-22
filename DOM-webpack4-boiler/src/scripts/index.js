// import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))




// let h1 = document.getElementById('my-h1')

// h1.innerHTML = 'This was DOM learning in ES6'

// console.log(h1);

// let headers = document.getElementsByTagName('h1')

// console.log(headers);

// let paragraph = document.getElementsByClassName('lead')
// console.log(paragraph);


let button = document.getElementById('clicks-mine')

let Color = ['Red', 'Green', 'Yellow', 'Blue']

let i = 0

button.addEventListener('click', function() {
    // console.log('We are learning ...')
    let h1 = document.getElementById('my-h1')

     h1.innerHTML = 'This was DOM .....'

     h1.style.background = Color[i]

     if (i >= Color.length) {
         i=0
     } else {
         i++
     }

})


