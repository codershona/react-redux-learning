// import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

// alert('Hello Catians')

const URL = 'https://jsonplaceholder.typicode.com/users'

let btn = document.querySelector('#loadingData')
let p = document.querySelector('#output')

btn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest()

   xhr.onreadystatechange = () => {
    // console.log(xhr.response)
    p.innerHTML = xhr.response
 }

  xhr.open('GET', URL)

  xhr.send()
})






