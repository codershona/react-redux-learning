// This Keyword and Bind Method :

// method 1:

// var object = {
//     name: 'Jenny Penny',

//     print: function() {
//         console.log(this);
//     }
// }

// function new_Function() {
//     // console.log(this);
//     function inner() {
//         console.log(this);
//     }
//     new inner();

// }

// object.print();

// new_Function(); // if we want to call the function in the console



// method 2:

// var bindOne = {
//     names: 'Jennifer Winget',
//     print: function() {
//         console.log('This is keyword method ' + this.names);
//     }
// }

// var mybindOne = bindOne.names;
// console.log(mybindOne);
// bindOne.print();

// var mybindOne = bindOne.print;
// console.log(mybindOne);
// mybindOne();
// var mybindOne = function() {
//     console.log(this);
//     console.log('This is also ' + this.names);
// }

// console.log(mybindOne);

// mybindOne();


// method 3

// function addition(num) {
//     console.log(this);
//   return this.value + num;

// }

// var object = {
//     value: 211
// }

// var objectOne = {
//     value: 330
// }

// var outcome = addition.bind(object, 200);
// var output = outcome(500);

// console.log(output);


// method 4


var keyword = {
    id: 'oneTwoThree',

    print: function() {
        // var id = this.id;
        setTimeout(function() {
            console.log(this);
            console.log('Functions are bind ' + this.id);
        }.bind(this), 2400);
    }
}

// keyword
// keyword.print();




