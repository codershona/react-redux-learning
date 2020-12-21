// this would give a syntax error
// user.likes birds = true


// let user = {};

// // set
// user["likes birds"] = true;

// // get
// alert(user["likes birds"]); // true

// // delete
// delete user["likes birds"];

// let person = {};
// person["be like that"] = true;
// alert(person["be like that"]);
// delete person["be like that"];


// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert( user[key] ); // John (if enter "name")

// let person = {
// 	names: "Jacky",
// 	age: 20
// };

// // let key = prompt("Hi baby", "names");

// let key = "names";
// // alert(person[key]);

// alert( person.key );


// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"


// let person = prompt("Is that you?", "Jacky");
// let id = {
// 	[person]: 7,
// };
// alert(id.Jacky);

// let user = {
//   name: "John",
//   age: 30
// };

// let key = "name";
// alert( user.key ) // undefined

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John


// function personID(userid, text) {
// 	return {
// 		userid: userid,
// 		text: text,
// 	};
// }
// let person = personID("jacky", 20);
// alert(person.userid);


// these properties are all right
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// alert( obj.for + obj.let + obj.return );  // 6


// let str = {
// 	for: 4,
// 		let: 6,
// 	return: 9
// };

// alert( str.for + str.let + str.return ); 

// let obj = {};
// obj.__proto__ = 5; // assign a number
// alert(obj.__proto__); 

// Object references and copying:

// Object methods, "this":

// let user = {
//   // ...
// };

// first, declare
// function sayHi() {
//   alert("Hello!");
// };

// then add as a method
// user.sayHi = sayHi;

// user.sayHi(); // Hello!


// let person = {

// };

// function Person() {
//    alert("Persons name: ")
// };
// person.Person = Person;
// person.Person();





// method 2

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)




// method 3

// let method = {
// 	num: 0,
// 	str() {
// 		this.num++;
// 		return this;
// 	},
// 	isStr() {
// 		this.num--;
// 		return this;
// 	},
// 	isNum() {
// 		alert(this.num);
// 		return this;
// 	}
// }

// method.str().str().isStr().str().isStr().isNum();


// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// ladder.up().up().down().up().down().showStep(); // 1



// method 4



// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );



// Optional chaining '?.' :


// let user = {}; // a user without "address" property

// alert(user.address.street); // Error!

// document.querySelector('.elem') is null if there's no element
// let html = document.querySelector('.elem').innerHTML; // error if it's null


// let person = {};
// alert(person.number.error);

// let user = {}; // user has no address

// alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)


// let person = {};
// alert( person.number && person.number.error && person.number.error.undefined );

// let user = {}; // user has no address

// alert( user?.address?.street ); // undefined (no error)

// let user = null;

// alert( user?.address ); // undefined
// alert( user?.address.street ); // undefined


// ReferenceError: user is not defined
// user?.address;

// let user = null;
// let x = 0;

// user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

// alert(x); // 0, value not incremented

// let person = null;
// let y = 0;
// person?.isPerson(y++);
// alert(y);


// let user1 = {
//   firstName: "John"
// };

// let user2 = null; // Imagine, we couldn't authorize the user

// let key = "firstName";

// alert( user1?.[key] ); // John
// alert( user2?.[key] ); // undefined

// alert( user1?.[key]?.something?.not?.existing); // undefined



// Constructor, operator "new" :

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false

// function Person(id) {
// 	this.id = id;
// 	this.idPanel = false;
// }

// let person = new Person("Rina");
// alert(person.id);
// alert(person.isPanel);


// function Person() {
//   alert(new.target);
// }

// // without "new":
// Person(); // undefined

// // with "new":
// new Person(); // function User { ... }


// function Person(id) {
//   if (!new.target) { // if you run me without new
//     return new Person(id); // ...I will add new for you
//   }

//   this.id = id;
// }

// let john = Person("John"); // redirects call to new User
// alert(john.id); // John


// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('How much to add?', 0);
//   };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

//  Optional chaining '?.' :


// let user1 = {
//   firstName: "John"
// };

// let user2 = null; // Imagine, we couldn't authorize the user

// let key = "firstName";

// alert( user1?.[key] ); // John
// alert( user2?.[key] ); // undefined

// alert( user1?.[key]?.something?.not?.existing);
// undefined



// let user = null;
// let x = 0;

// user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

// alert(x); // 0, value not incremented


// Symbol type:


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name

// method 2:

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123


// method 3

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );

// Object to primitive conversion:


let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500);


// method 2:
let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500







