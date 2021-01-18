// Destructuring Array and Object Details

// const listSearch = [4, 990, 100];

// var x = listSearch[0];

// var y = listSearch[3];

// let [x, y, z] = listSearch;

// console.log(x);
// console.log(y);
// console.log(z);



const objOne = {
    query: 'Click here',
    stringOne: 'this is destructuring array'

}


let { query, stringOne } = objOne;
console.log(query, stringOne);

// let query = objOne.query;

// let stringOne = objOne.stringOne;

// function objectThree(query, stringOne) {
//     console.log(`This is another ${query}; We have a String: ${stringOne}`);
// }

function objectThree({query, stringOne}) {
    console.log(`This is another ${query}; We have a String: ${stringOne}`);
}


objectThree(query, stringOne);
objectThree(stringOne, query);
