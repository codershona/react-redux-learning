// first class function

// ========= Method ======
// If a function has a variable it needs to be stored.
function saysName(name) {
    return 'Hello, ' + name;

}
var helloOne = saysName;
// var funny = saysName();
// var funny = saysName('Barbie Doll');

// console.log(helloOne);
// console.log(funny);

// helloOne('Barbie Doll');
// var result = helloOne('Barbie Doll');

// result;

// console.log(helloOne('Barbie Doll'));


var twoHello = helloOne;
console.log(twoHello('Barbie Doll2'));


// An array could be stored in a function
var arr = [1, 3 , 6, twoHello];
// var arr = [1, 3 , 6];
arr.push(saysName);
console.log(arr);


// An object filed or property could be stored in a function

var personOne = {
    name: 'Jenny Doll',
    // saysName: saysName
    saysName: helloOne,
    print: function() {
        console.log('Hey');
    }
}
personOne


// A function could be created if its needed.

var sum = 10 + (function() {
    return 20
})();

sum;


// An arguments could be passed by the function

function hooks(name, hookOne) {
    // console.log(hookOne(name));
    // hookOne(name);
    return hookOne(name);
}

var results = hooks('Jiniya', saysName);
console.log(results);

// A function could be returned from another function.

function baseToken(d) {
    return function(x) {
        var output = 1;

        for (var i=0; i<d; i++) {
            output *= x;
        }
        return output;
    }
}

// var strength = baseToken(3);
// strength;
// var output = strength(300);
// output;

var output = baseToken(4)(8);
output;








