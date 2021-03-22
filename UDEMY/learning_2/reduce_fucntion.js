// Reduce Function

// method 1
var arr = [55, 99, 11, 22, 33, 44, 77, 66];

// var sum = 0;
// for (var i=0; i<arr.length; i++) {
//     sum += arr[i];
// }

// console.log('The sum are = ' + sum);

// method 2

var outcome = arr.reduce(function(x, y) {
    return x + y;
});

console.log('The outcome will be = ' + outcome);


