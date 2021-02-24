// MapFunction Implementation


var arr = [55, 99, 11, 22, 33, 44, 77, 66];

// method 1

// var mapArr = [];

// for (var i=0; i<arr.length; i++) {
//     mapArr.push(arr[i] + 2);
// }

// console.log('This is Map Array = ' + mapArr);

// method 2

// var newestArr = arr.map(function(value) {
//   return value + 2;
// });

// console.log('This is Newest Array = ' + newestArr);

// method 3

function latestMap(arr, callback) {
    var newestArr = [];

   for (var i=0; i<arr.length; i++) {
       var data = callback(arr[i]);
        newestArr.push(callback(arr[i]));
        newestArr.push(data);
    }
    return newestArr;
}

var mapArr = latestMap(arr, function(value) {
   return value + 5 - 2 * 3;
   // return value * (5 - 2 * 3);
});


console.log('This Is a Map function ' + mapArr);




