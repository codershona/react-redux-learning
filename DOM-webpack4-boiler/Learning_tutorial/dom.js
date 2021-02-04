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


// let button = document.getElementById('clicks-mine')

// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = document.getElementById('my-h1')

//      h1.innerHTML = 'This was DOM .....'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })




// DOM Query selector and query selector all:

// let button = document.querySelector('#clicks-mine')

// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = document.querySelector('#my-h1')

//      h1.innerHTML = 'This was DOM Lesson'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })


// let button = $('#clicks-mine')

// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = $('#my-h1')

//      h1.innerHTML = 'This was DOM Lesson'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })



// function $(selector) {
//     return document.querySelector(selector)
// }

// let container = document.querySelector('.container')
// let container = document.querySelector('div')
// let container = document.querySelectorAll('div')
// let container = document.querySelectorAll('h1')

// console.log(container);




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


// let button = document.getElementById('clicks-mine')

// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = document.getElementById('my-h1')

//      h1.innerHTML = 'This was DOM .....'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })




// DOM Query selector and query selector all:

// let button = document.querySelector('#clicks-mine')

// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = document.querySelector('#my-h1')

//      h1.innerHTML = 'This was DOM Lesson'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })

// DOM Style your document:


// let button = $('#clicks-mine')

// console.log(button);
// console.dir(button);
// console.log(button.style);
// console.dir(document)



// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = $('#my-h1')

//      h1.innerHTML = 'This was DOM Lesson'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })



// function $(selector) {
//     return document.querySelector(selector)
// }

// // let h1 = document.querySelector('#my-h1')
// let h1 = $('#my-h1')

// h1.style.background = 'Pink'
// h1.style.fontSize = '28px'
// h1.style.fontFamily = 'sans-serif'
// h1.style.padding = '21px'

// let h1CssStyle = {
//     background: 'Pink',
//     fontSize: '28px',
//     fontFamily: 'sans-serif',
//     padding: '21px',
//     textAlign: 'center'

// }

// Object.assign(h1.style, h1CssStyle)

// let paraStyle = {
//     padding: '11px',
//     fontSize: '19px',
//     lineHeight: '1.5'
// }

// // let p = $('#my-para')
// // Object.assign(p.style, paraStyle)
// Object.assign($('#my-para').style, paraStyle)



// let container = document.querySelector('.container')
// let container = document.querySelector('div')
// let container = document.querySelectorAll('div')
// let container = document.querySelectorAll('h1')

// console.log(container);



// DOM : Working with events :


// let button = $('#clicks-mine')
// let Color = ['Red', 'Green', 'Yellow', 'Blue']

// let i = 0

// button.addEventListener('click', function() {
//     // console.log('We are learning ...')
//     let h1 = $('#my-h1')

//      h1.innerHTML = 'This was DOM Lesson'

//      h1.style.background = Color[i]

//      if (i >= Color.length) {
//          i=0
//      } else {
//          i++
//      }

// })



// function $(selector) {
//     return document.querySelector(selector)
// }

// let h1CssStyle = {
//     background: 'Pink',
//     fontSize: '28px',
//     fontFamily: 'sans-serif',
//     padding: '21px',
//     textAlign: 'center'

// }

// Object.assign(h1.style, h1CssStyle)

// let paraStyle = {
//     padding: '11px',
//     fontSize: '19px',
//     lineHeight: '1.5'
// }

// Object.assign($('#my-para').style, paraStyle)




// working with events :

// let btn = document.querySelector('#btn');

// let para = document.querySelector('#para');

// let isShown = false;

// btn.addEventListener('click', function() {
//     if (isShown) {
//         para.style.visibility = 'hidden';
//         isShown = false;
//         btn.innerHTML = 'SHOW';

//     } else {
//         para.style.visibility = 'visible';
//         isShown = true;
//         btn.innerHTML = 'HIDE';

//     }

// })




// working with Dom: Creating and Deleting DOM

// let root = document.querySelector('#root')

// let jumbotronDiv = document.createElement("div")

// jumbotronDivs.classList.push('jumbotron')
// jumbotronDiv.className = 'jumbotron text-center'

// jumbotronDivs.attributes
// jumbotronDiv.setAttribute('id','my-jmb')

// let h1 = document.createElement('h1')
// h1.className = 'display-2 py-5'


// h1.innerText = '<strong>This was DOM Object</strong>'
// h1.innerHTML = '<strong>This was DOM Object</strong>'

// jumbotronDiv.appendChild(h1)


// root.appendChild(jumbotronDiv)
// console.log(root.children)

// console.log(jumbotronDivs)
// console.dir(jumbotronDivs)



