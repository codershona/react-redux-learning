// Higher Order Function

var arr = [2, 3 , 5 ,7 , 0, 6, 2, 1];

// arr.forEach(function exampleTwo(d) {
//     console.log(d);
// });
function exampleTwo(d) {
    console.log(d);
}


arr.forEach(exampleTwo);

function callerOne() {
    return function(names) {
        return 'Hello I am calling you from customer center ' + names;
    }
}


var y = callerOne();
y;

var g = y('Barbie Doll');
g;

var c = callerOne()('Hello Higher Order Function Js');
c;
