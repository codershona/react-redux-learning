// Return A Function From Another Function

// Method 1:

// function hostOne() {
//     console.log('This a also a return function...');

//     function childPath() {
//         console.log('Using with another function');
//     }

//     return childPath;

//     // return function() {
//     //     console.log('CALL BACK FUNCTION');
//     // }
// }


// // hostOne();
// var x = hostOne();
// // console.log(x);
// x();


// Method 2:

// function callbackFunction(message) {
//     return function(firstname) {
//     console.log(message + ' ' + firstname);
//  }
// }

function callbackFunction(message) {
    function red(lastname) {
        console.log(message + ' ' + lastname);
    }
    return red;
}


var outcome = callbackFunction('This is also another function One');

var result = callbackFunction('Working with callback again');
// callbackFunction();
result('Jennifer Winget');
outcome('Barbie Dolls');





