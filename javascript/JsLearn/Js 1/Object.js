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




// method 1



