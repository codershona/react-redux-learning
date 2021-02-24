// Postmortem of Closure

// method 1

// var names = 'Barbie Doll';

// function hooksName() {
//    console.log('This is important ' + names);
// }

// // console.dir(hooksName);

// hooksName();

// method 2

function callbackFunction(message) {
    return function(firstname) {
    console.log(message + ' ' + firstname);
 }
}


var callingClosure = callbackFunction('Working with closures');
callingClosure('This is also using with callback');


