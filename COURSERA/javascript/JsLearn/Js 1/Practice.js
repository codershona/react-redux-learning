// alert( 5 > 4 );
// alert( "apple" > "pineapple" );
// alert( "2" > "12" );
// alert( undefined == null );
// alert( undefined === null );
// alert( null == "\n0\n" );
// alert( null === +"\n0\n" );


// Function expressions :


// function sayHi() {
//   alert( "Hello" );
// }

// alert( sayHi ); // shows the function code

// function queryParams() {
// 	alert( "this is Function expressions");
// }
// alert(queryParams);

// function sayHi() {   // (1) create
//   alert( "Hello" );
// }

// let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)


// function queryParams() {
// 	alert("This is function expressions..");
// }

// let query = queryParams;
// query();
// queryParams();



// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);



// function showQuery(text, speech, description) {
// 	  if (confirm(text)) speech()
//   else no();
// }

// function showParams() {
//   alert( "You agreed.......!" );
// }

// function showDelete() {
//   alert( "You canceled the execution......" );
// }

// showQuery("Do you agree?....", showParams, showDelete);


// queryParams("4"); // error!

// let queryParams = function(name) {  // (*) no magic any more
//   alert( `Hello javascript, ${name}` );
// };


// let user = prompt("What is your userId?", 9);

// // conditionally declare a function
// if (user < 9) {

//   function query() {
//     alert("Hello!......");
//   }

// } else {

//   function query() {
//     alert("Greetings!.....");
//   }

// }

// // ...use it later
// query(); // Error: welcome is not defined


// Arrow functions, the basics :


// let sum = (a, b) => a + b;

//  This arrow function is a shorter form of:

// let sum = function(a, b) {
//   return a + b;
// };


// alert( sum(1, 2) ); // 3

// let summary = (x, y) => x + y;
// alert(summary(3, 4));

// let double = n => n * 2;
// // roughly the same as: let double = function(n) { return n * 2 }

// alert( double(3) ); // 6

// let doubleSpace = x => x * 4;
// alert(doubleSpace(9));

// let sum = (a, b) => {  // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, then we need an explicit "return"
// };

// alert( sum(1, 2) ); // 3

// const stringOne = (x, n) => {
// 	const output = x + n;
// 	return output;
// };

// alert(stringOne(4, 6));


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => { alert("You agreed."); },
//   () => { alert("You canceled the execution."); }
// );








