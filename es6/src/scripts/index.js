// default parameter, rest and spread operator


function addition(...num) {
//    console.log(query);
   return num.reduce((x, y) => x + y);
}

let Add = addition(200, 500, 900);
console.log(Add);

var array = [22, 33,44, 55];
console.log(...array);
console.log(array);




