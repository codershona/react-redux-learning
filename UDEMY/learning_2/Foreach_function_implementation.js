// ForEach Function Implementations

// method 1
var arr = [22, 33, 44, 55 ,66 ,77, 88];

// arr.forEach(function(elements, index, arr) {
//     console.log("Those elements are = " + elements + ' Indexes = ' + index + ' arr = ' + arr);
// });

// method 2
function loop(arr, callback) {
    for (var i=0; i<arr.length; i++) {
        // console.log(arr[i]);
        // callback(arr[i])
        callback(arr[i], i);
    }
}
// loop(arr);
loop(arr, function(elements, i) {
    console.log('Elements are ' + elements + ' indexes = ' + i);
});




// method 3

