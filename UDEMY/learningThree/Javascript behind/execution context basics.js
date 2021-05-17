// Intro Basics

// we must require browser & nodejs environment setup to execute the javascript code.
// Javascript Engine = Abstract Window Tree ----> Machine Code ----> Run = PARSER


// var fruits = {
//     fruitName: 'Pineapple',
//     print: function() {
//         setTimeout(function() {
//             console.log(this);
//             console.log('This is our national ' + this.fruitName);
//         },bind(this), 2300);
//     }
// }

// // Execution context basics

// // Execution Context has a container, where we can create a piece of the code to execute.
// // This has a default execution context which has a window and global.
// // But if we try to think the execution context actually it was an object.
// // This is a kind of code which does not have any inside function and it was associated with the global object.
// // But in the chrome browser it has a window object and in nodejs it has a global object so that we could able to declare the global context automatically by attaching the window object.

// // If the code was in the inside function we could call a new function to get a brand new context  of its own.

// // GLOBAL CONTEXT:

// var flower = 'GADA Flower';  // variable object with flower name

// function nationalFlower() {  // variable object reference
//     internationalFlower();
//     var national = 'This is a national flower';
//     console.log(national);
// }

// function internationalFlower() {
//     cityFlower();
//     var international = 'This is a Inter-national flower';
//     console.log(international);
// }

// function cityFlower() {
//     // internationalFlower();
//     console.log('Rose Flower ' + flower);
//     var cityNational = 'This is a flower grows in city';
//     console.log(cityNational);
// }
// nationalFlower(); // new context which is nationalFlower

// Execution context needs to create a Variable Object + Scope Chain + This Variable = Creational Phase


// Hoisting and Variable Object Creation


// Function Expression vs Declaration in Details:
// method 1
// function declare() {
//     console.log('This is a Function Expression');
// }

// declare();  // Function Expression

// method 2
// var details = function() {  // Declaration in Details
//     console.log('This is a Declaration Details');
// }
// console.log(details);
// details();


// Scope Chain & Lexical Scope:

// var food = 200;

// console.log(food);

// function alubhaji() {
//     var food = 400;
//     console.log(food);
//     console.log(indianfoody);

//     function indianFood() {
//         var indianfoody = 900;
//         console.log(food);

//         function westernFood(){
//             console.log(food);
//         }
//         westernFood();
//     }
//     indianFood();
// }
// alubhaji();


// Stack vs Scope Chain :

// var x = 100;

// X();

// function X () {
//     var y = 6;
//     Y();

//     function Y() {
//         var z = 233;

//         Z(y, z);
//     }
// }

// function Z(y, z) {
//     var w = 200;
//     console.log(x + y + z + w);
// }


// This keyword Initialization:


// function X() {
//     console.log(this);
// }

// X();


var objectThis = {
    id: 'Heeeee!!!!',

    print: function() {
        console.log('NOOO!', this.id);
        // console.log(this);

        function anotherObject() {
            console.log(this);
        }
        anotherObject();
    }
}

var global = {
    id: 'yeeessss!!!'
}


global.print = objectThis.print();
global.print();



