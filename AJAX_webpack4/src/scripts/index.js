// import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

// alert('Hello Catians')

const URL = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    console.log(xhr.response)

}

xhr.open('GET', URL)

xhr.send()




