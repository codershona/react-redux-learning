// Javascript Prototype

// method 1


// function Prototype(method, logic) {
//     this.method = method;
//     this.logic = logic;

//     this.concepts = function() {
//         console.log('This is prototype javascript ' + this.method);
//     }

// }


function Prototypes(method, logic) {
    this.method = method;
    this.logic = logic;
}

Prototypes.prototype.concepts = function() {
        console.log('This is prototype javascript ' + this.method);
}

Prototypes.prototype.emails = 'jenny@email.com';

Prototypes.prototype.shows = function() {
    console.log(this.method, this.logic);
}

var obj1 = new Prototypes('This is javascript', 33);
var obj2 = new Prototypes('This is keyword method', 11);

console.log(obj1);

console.log(obj2);
console.log(Prototypes.prototype);














