// __protoo__ VS Prototype differences


// method 1
function ObjectFour(e, j) {
    this.e = e;
    this.j = j;
}

// Object.prototype = {};

function ObjectSix(e, j, d) {
    ObjectFour.call(this, e, j);

    this.d = d;

}

ObjectSix.prototype = Object.create(ObjectFour.prototype);

function ObjectNine() {
   ObjectFour.call(this, 333, 444, 55);

}

ObjectNine.prototype = Object.create(ObjectSix.prototype);

// var objectFive = new ObjectFour(33, 99);
var objectSix= new ObjectFour(22, 66, 44);

var objectNine = new ObjectNine();
// objectFive.__proto__
// objectFive

// Object.prototype




