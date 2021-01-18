// default parameter, rest and spread operator


function addition(...num) {
//    console.log(query);
   return num.reduce((x, y) => x + y);
}

let Add = addition(200, 500, 900);
console.log(Add);

var array = [22, 33,44, 55];
array = [...array, 22, 3333, 400];
// console.log(...array);
console.log(array);

var object = {
    name: 'Jarbie',
    email: "jarbie@test.com"
}

var objectTwo = {
    ...object,
    name: 'Jenny',
    age: '55'
}

console.log(objectTwo);

// run node src/scripts/index.js into the terminal

