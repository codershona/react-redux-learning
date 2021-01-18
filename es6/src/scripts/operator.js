// default parameter

let addition = (x, y) => x + y;

console.log(addition(20));

let square = (x, y) => x * y;

let squares = (x, y=2) => x * y;
console.log(squares(20));
console.log(squares(20, 9));
console.log(squares());


// rest and spread operator


function addition(...num) {
    //    console.log(query);
       return num.reduce((x, y) => x + y);
    }
    
    // addition();
    // addition(200, 500, 900);
    let Add = addition(200, 500, 900);
    console.log(Add);
    // addition([200, 500]);



var array = [22, 33,44, 55];
console.log(...array);
console.log(array);










