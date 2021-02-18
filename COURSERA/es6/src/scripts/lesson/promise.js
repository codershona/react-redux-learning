console.log('Hey first');

setTimeout(() => {
    console.log('Hey second.....');
}, 4000)

console.log('This is third');

setTimeout(() => {
    console.log('Hey forth.....');
}, 100)



// example 2


let FirstPromise = new Promise((resolve, reject) => {
    let promiseOne = 'Asynchronous Promise';

   // resolve(promiseOne);

   setTimeout(() => resolve(promiseOne), 4000);

})


// console.log(FirstPromise);

// FirstPromise
// .then((promiseOne) => {

// })
// .catch((err) => {

// })


FirstPromise
.then((promiseOne) => {

    console.log('This is promise method ' + promiseOne);

})



// example 30
// let promiseData = fetch('https://jsonplaceholder.typicode.com/users');

// console.log(promiseData);


