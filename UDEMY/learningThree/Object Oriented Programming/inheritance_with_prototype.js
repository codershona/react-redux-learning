// Inheritance with Prototypes


// method 1

// function InheritanceOne() {
//     this.age = "56"
// }

// function InheritanceTwo() {
//     InheritanceOne.bind(this);
//     this.chapter = "Classes ^ Object";
// }

// var indexOne = new InheritanceTwo();

// var age = indexOne.age;
// console.log(age);


// method 2

function withIn(names) {
    this.names = names;
}

withIn.prototype.printNames = function() {
    console.log('The names: ' + this.names);
}

withIn.prototype.another = function() {
    console.log('The ages: ');
}

function methodTwo(names, age) {
    withIn.call(this, names);
    this.age = age;

}

// Object.setPrototypeOf(methodTwo.prototype, withIn.prototype);

methodTwo.prototype = Object.create(withIn.prototype);
methodTwo.prototype.constructor = methodTwo;
var logical = new methodTwo('Tarini Kamini', 333399);

// logical  // to call in the console
// logical.printNames() // to call in the console

// console.dir(logical);
// logical.printNames();
// console.dir(methodTwo.prototype.constructor);
// methodTwo.prototype == withIn.prototype
// methodTwo.prototype.printNames == withIn.prototype.printNames

methodTwo.prototype.printNames == function() {
    console.log(this.names + 'Not COPIED!!!!');
}
// logical.printNames();

withIn.prototype.skills = "JAVASCRIPT KNOWLEDGE"

// logical.skill();