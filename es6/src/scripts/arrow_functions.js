

const hooks = (search) => {
    console.log('This is Arrow Function', search);
}
const hooksOne = searchOne => {
    console.log('This is Arrow Function.....', searchOne);
}

// print(search);
hooks('ES6 lessons');
hooksOne('ES6 lessons');

const addAddition = (x, y) => x + y;


console.log(addAddition(30, 99));

// function submits(a) {
//     return a*a;
// }

const submit = a => a*a;
console.log(submit(90));


