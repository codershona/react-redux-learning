// Filter Function Implementations

// method 1

var arr = [55, 99, 11, 22, 33, 44, 77];

// var latestArr = [];

// for (var i=0; i<arr.length; i++) {
//     if(arr[i]%2 == 1) {
//         latestArr.push(arr[i]);
//     }
// }


// console.log('I am using New and Latest Array those are = ' + latestArr);


// method 2
// var latestArr = arr.filter(function(value) {
//     return value % 2 == 1;
// });

// console.log('The latest Array = ' + latestArr);


// method 3

function useFilter(arr, callback) {
    var newestArr = [];
    for (var i=0; i<arr.length; i++) {
        if (callback(arr[i])) {
            newestArr.push(arr[i]);
        }
    }
    return newestArr;
}

var oldArr = useFilter(arr, function(elements) {
    return elements % 2 == 1;
});

console.log('Learning Filter Function using data = ' + oldArr);



