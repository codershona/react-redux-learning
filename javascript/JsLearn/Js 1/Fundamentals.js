

//     alert('Hello');
//     // alert('World');

//   //   alert(3 +1 + 2);

//   //   alert("some code");
//   //   // "use strict" below is ignored--it must be at the top

//      "use strict";

//   //    // strict mode is not activated


//   //    // Variables

//   //  let message;
//   //   message = 'This is a Javascript variables';

//   //    alert(message);


//   //    let example = 'This is using let variables'; // define the variable and assign the value

//   //     alert(example); // Hello!

//   //     let persons = 'Lila', 
//   //     age = 24, 
//   //     shorts = 'Multiple declare';

//   //     var exampleOne = 'Hello Javascript';

 
//   //   // method 2

//   //     let methodTwo;

//   //    methodTwo = 'Variables Structures';

//   //     methodTwo = 'One and Two'; // value changed

//   //    alert(methodTwo);

//   //    // method 3


//   //    let methodFour = 'Working method three';

// 		// let methodThree;

// 		// // copy 'Hello world' from hello into message
// 		// methodThree = methodFour;

// 		// // now two variables hold the same data
// 		// alert(methodFour); // Hello world!
// 		// alert(methodThree); // Hello world!


// 		// // variable naming 


// 		// let userName;
//   //      let test123;


//   //      let let = 5; // can't name a variable "let", error!
//   //       let return = 5; // also can't name it "return", error!
//   //       let function = 5;
//   //       let class = 5;



//         // const myBirthday = '18.04.1982';

//         //  myBirthday = '01.01.2001';


//   //        const COLOR_RED = "#F00";
// 		// const COLOR_GREEN = "#0F0";
// 		// const COLOR_BLUE = "#00F";
// 		// const COLOR_ORANGE = "#FF7F00";

// 		// // ...when we need to pick a color
// 		// let color = COLOR_ORANGE;
// 		// alert(color); // #FF7F00

// 		// const pageLoadTime =  time taken by a webpage to load ;


// 		// declare by var/let or const

// 		// const STRING_ONE = "1";
// 		// const STRING_TWO = "2";
// 		// const STRING_THREE = "3";
// 		// const stringLoadingTime = "8";


// 		// const strings = STRING_TWO;
// 		// const loading = stringLoadingTime;
// 		// alert(loading);
// 		// alert(strings);



//    // Data types

//    // alert( 1 / 0 );
//    // alert( Infinity );

//    // alert( "not a number" / 2 ); // NaN, such division is erroneous

//    // alert( "not a number" / 2 + 5 );

//    //  alert( "not a number" / 3 ); 
//    //   alert( "not a number" / 5 + 6 ); 
//    // // string

//   //    let users = "MILI";

// 		// // embed a variable
// 		// alert( `This is , ${users}!` ); // Hello, John!

// 		// // embed an expression
// 		// alert( `Her score is  ${6 + 9}` ); // the result is 3



// 		// // Boolean (logical type)

// 		// let isLoading = 7 > 2;

//   //      alert( isLoading ); // true (the comparison result is "yes")


//    // undefined


//    // let age = 100;

//    // // change the value to undefined
//    // age = undefined;

//    //   alert(age);


// // interactions

// // let age = prompt('How old are you?', 100);

// // alert(`You are ${age} years old!`); // You are 100 years old!

 
//  let str = prompt('Hi howdy', 200);
// alert(`How ${str} is th weather`);

// // prompt uses
// // let test = prompt("Test");
// let name = prompt("Your Name");
// // let tests = prompt("Tests", ''); // <-- for IE
// let names = prompt("Names", ''); // <-- for IE

// // confirm uses

// // let isBoss = confirm("Are you the boss?");

// // alert( isBoss ); // true if OK is pressed

// let isStr = confirm("Do you want to delete thisname");

// alert( isStr ); // true if OK is pressed





// // The typeof operator

// // Type Conversions

// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string


// let num = true;
// alert(typeof num); // boolean

// num = String(num); // now value is a string "true"
// alert(typeof num); // string



// // alert( "6" / "2" ); // 3, strings are converted to numbers

// alert( "8" / "4" ); // 3, strings are converted to numbers


// // let str = "123";
// // alert(typeof str); // string

// // let num = Number(str); // becomes a number 123

// // alert(typeof num); // number



// let users = "222";
// alert(typeof users); // string

// let number = Number(users); // becomes a number 123

// alert(typeof number); // number


// // alert( Number("   123   ") ); // 123
// // alert( Number("123z") );      // NaN (error reading a number at "z")
// // alert( Number(true) );        // 1
// // alert( Number(false) );       // 0


// // alert( Numbers("   333   ") ); // 123
// // alert( Numbers("444z") );      // NaN (error reading a number at "z")
// // alert( Numbers(true) );        // 1
// // alert( Numbers(false) );       // 0

// // alert( Boolean(1) ); // true
// // alert( Boolean(0) ); // false

// // alert( Boolean("hello Javascript") ); // true
// // alert( Boolean("") ); // false



// // Basic operators, maths  :

// // Terms: “unary”, “binary”, “operand”


// let x = 1;

// x = -x;
// alert( x ); // -1, unary negation was applied

// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values

// let y = 2;
// y = -y;
// alert( y );

// let b = 2, a = 4;
// alert( a - b );

// // remainder

// // alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
// // alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

// alert( 6 % 3 ); // 1, a remainder of 5 divided by 2
// alert( 9 % 2 ); // 2, a remainder of 8 divided by 3


// // Exponentiation **

// alert( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)


// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// // String concatenation with binary +


// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"


// alert(2 + 2 + '1' ); // "41" and not "221"

// alert('1' + 2 + 2); // "122" and not "14"

// alert( 6 - '2' ); // 4, converts '2' to a number
// alert( '6' / '2' ); // 3, converts both operands to numbers


// // Numeric conversion, unary +

// // No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0


// // method 3

// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // "23", the binary plus concatenates strings



// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// // the longer variant
// // alert( Number(apples) + Number(oranges) ); // 5


// // Operator precedence


// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0


// let a, b, c;

// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4



// // Modify-in-place


// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14


// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14


// let n = 2;

// n *= 3 + 5;

// alert( n ); // 16  (right part evaluated first, same as n *= 8)




// // Increment/decrement


// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3



// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1


// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2


// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1


// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same


// let counter = 0;
// alert( ++counter ); // 1


// // Bitwise operators
// // Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// // These operators are not JavaScript-specific. They are supported in most programming languages.

// // The list of operators:

// // AND ( & )
// // OR ( | )
// // XOR ( ^ )
// // NOT ( ~ )
// // LEFT SHIFT ( << )
// // RIGHT SHIFT ( >> )
// // ZERO-FILL RIGHT SHIFT ( >>> )



// // 1
// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// alert( ++a );
// alert( b++);
// alert( a );
// alert( b );

// let a = 2;

// let x = 1 + (a *= 2);

// alert( x );


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 12



// // Comparisons


// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 ); // true (correct)


// alert(3 > 1);
// alert( 3 == 1 );
// alert(3 != 2);


// let result = 5 > 4; // assign the result of the comparison
// alert( result ); // true

// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// let shows = 6 > 2; // assign the result of the comparison
// alert( shows ); // true

// alert( 'F' > 'Z' ); // true
// alert( 'Glowing' > 'Glees' ); // true
// alert( 'Bees' > 'Bes' ); // true


// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1


// alert( true == 1 ); // true
// alert( false == 0 ); // true

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// alert( 0 == false ); // true

// alert( '' == false ); // true

// alert( null === undefined ); // false

// alert( null == undefined ); // true

// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true

// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3



// Conditional branching: if, '?'

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) alert( 'You are right!' );

// let salesman = prompt('We had sale 13 apartmants', '');

// if (salesman == 2015) alert( 'Thats great' );

// The “else” clause :


// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }


// let users = prompt('I am leanring else claues', '');
// if (users == 2) {
// 	alert( "This is right user" );

// } else {
// 	alert( 'This was a wrong answers' );
// }


// Several conditions: “else if”

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// let names = prompt('This is else if condition', '');

// if (names < 8) {
//   alert( 'Guess which condition' );
// } else if (names > 4) {
//   alert( 'Wrong please write again' );
// } else {
//   alert( 'Exactly!...' );
// }


// Conditional operator ‘?’


// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);


// let accessNumberStack;
// let userId = prompt('Enter your user id?', '');

// if (userId > 3) {
//   accessNumberStack = true;
// } else {
//   accessNumberStack= false;
// }

// alert(accessAllowed);


// Multiple ‘?’

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// Non-traditional use of ‘?’


// let company = prompt('Which company created JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Right!') : alert('Wrong.');


//    let stack = prompt('Learning method 2', '');

// (stack == 'Javascript') ?
//   alert('correct answers') : alert('incorrect answers.');




   // method 2

//    let company = prompt('Which company created JavaScript?', '');

// if (company == 'Netscape') {
//   alert('Right!');
// } else {
//   alert('Wrong.');
// }


// let stack = prompt('Learning method 2', '');

// if (stack == 'Javascript') {
//   alert('correct answers');
// } else {
//   alert('incorrect answers.');
// }

// Logical operators

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// if (2 || 1) { // works just like if( true || false )
//   alert( 'It maybe true' );
// }



// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// let users = 8;
// if (users < 88 || users > 12) {
// 	alert('Is this ok');
// }


// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }



// let users = 22;
// let isUsers = true;
// if (users < 20 || users > 17 || isUsers) {
// 	alert('hellody');
// }


// alert( 6 || 0 ); // 1 (1 is truthy)

// alert( null || 8 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 9 ); // 1 (the first truthy value)

// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


// let Name = "";
// let fatherName = "";
// let motherName = "SuperCoder";

// alert( Name || fatherName || motherName || "Anonymous"); // SuperCoder


// true || alert("not printed!!");
// false || alert("printed!!");

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false



// let name = 22;
// let number = 39;

// if (name == 22 && number == 39) {
//   alert( 'Numner and Name is ' );
// }


// if (2 && 0) { // evaluated as true && false
//   alert( "won't work, because the result is falsy" );
// }



// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) );

// alert( !!"non-empty string" ); // true
// alert( !!null )

// alert( !true ); // false
// alert( !0 ); // true


// Nullish coalescing operator '??':

// let user;

// alert(user ?? "Anonymous"); // Anonymous

// let user = "Baby";

// alert(user ?? "Anonymous"); // John


// let fatherName = null;
// let motherName = null;
// let sisterName = "Supercodersss";

// // shows the first defined value:
// alert(fatherName ?? motherName ?? sisterName ?? "Anonymous"); 



// Loops: while and for

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// let x = 1;
// while(x < 4) {
// 	alert(x);
// 	x++
// }

// let y = 6;
// while (y) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( y );
//   y--;
// }


// The “do…while” loop


// let x = 0;
// do {
//   alert( x );
//   x++;
// } while (x < 8);


// for (let y = 0; y < 7; y++) { // shows 0, then 1, then 2
//   alert(y);
// }


// let ix = 0;

// for (ix = 0; ix < 6; ix++) { // use an existing variable
//   alert(ix); // 0, 1, 2
// }

// alert(ix); // 3, visible, because declared outside of the loop



// let sums = 0;

// while (true) {

//   let values = +prompt("Enter a code numbers: ", '');

//   if (!values) break; // (*)

//   sums += values;

// }
// alert( 'Sum : ' + sums );



// for (let y = 0; y < 9; y++) {

//   // if true, skip the remaining part of the body
//   if (y % 5 == 0) continue;

//   alert(y); // 1, then 3, 5, 7, 9
// }




// if (i > 5) {
//   alert(i);
// } else {
//   continue;
// }

// if (x > 6) {
// 	alert(x);
// } else {
// 	continue;
// }

// for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert('Done!');


// for (let iy = 0; iy < 6; iy++) {

//   for (let jx = 0; jx < 9; jx++) {

//     let input = prompt(`Value at coords (${iy},${jx})`, '');

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert('Done!.......');



// The "switch" statement :



// let x = 4 + 4;

// switch (x) {
//   case 5:
//     alert( 'Too small..............' );
//     break;
//   case 6:
//     alert( 'Exactly!...........' );
//     break;
//   case 7:
//     alert( 'Too large.............' );
//     break;
//   default:
//     alert( "I don't know such values..............." );
// }


// let x = 6;

// switch (x) {
//   case 7:
//     alert('Right!.....');
//     break;

//   case 4: // (*) grouped two cases
//   case 8:
//     alert('Wrong!....');
//     alert("Why don't you take a math class?....");
//     break;

//   default:
//     alert('The result is strange. Really.....');
// }


// let browser = prompt("Enter a browser name ");
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// Functions :

// Function Declaration

// function showMessage() {
//   alert( 'Hello everyone!' );
// }

// showMessage();
// showMessage();

// function showAlert() {
// 	alert('Jsas');
// }

// showAlert();



// // Local variables :

// function showAlerts() {
//   let messages = "Hello, I'm JavaScript!......"; // local variable

//   alert( messages );
// }

// showAlerts(); // Hello, I'm JavaScript!

// alert( messages ); // <-- Error! The variable is local to the function



// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); // Hello, John

// let userId = 'JohnnyPApa';

// function showMessage() {
//   let messages = 'Hello, ' + userID;
//   alert(messages);
// }

// showMessage(); // Hello, John


// // method 2


// let userIDs = 'Johnny';

// function showMessage() {
//   userIDs = "Bobby"; // (1) changed the outer variable

//   let messages = 'Hello,,,, ' + userIDs;
//   alert(messages);
// }

// alert( userIDs ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function



// method 3

// Parameters :



// function showMessage(from, text) { // arguments: from, text
//   alert(from + ': ' + text);
// }

// showMessage('Annnaaa', 'Hello...!'); // Ann: Hello! (*)
// showMessage('Annnnaa', "What's up...?"); // Ann: What's up? (**)


// // method 4

// function showMessage(from, text) {

//   from = '*' + from + '*'; // make "from" look nicer

//   alert( from + ': ' + text );
// }

// let from = "Annaaa";

// showMessage(from, "Hellooo"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// alert( from ); // Ann

// // default values

// function showMessage(from, text = "no text given") {
//   alert( from + ": " + text );
// }

// showMessage("Annnaaa"); // Ann: no text given

// // method 5

// function showMessage(text) {
//   if (text === undefined) {
//     text = 'empty message....';
//   }

//   alert(text);
// }

// showMessage(); // empty message

// // method 6

// // if there's no "count" parameter, show "unknown"
// function showCount(count) {
//   alert(count ?? "unknown");
// }

// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown


// Returning a value


// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// alert( result ); // 3

// function sums(x, y) {
// 	return x + y;
// }
// let query = sums(3, 5);
// alert(query);


// method 8
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }


// function checkMethod(method) {
// 	if (method >= 28) {
// 		return true;

// 	} else {
// 		return confirm('Do you wan to work in metod?');

// 	}
// }

// let method = prompt('How was the tasks?', 28);

// if ( checkMethod(method) ) {
//   alert( 'Access granted....' );
// } else {
//   alert( 'Access denied...' );
// }


// // method 9

// // function doNothing() {
// //   return;
// // }

// // alert( doNothing() === undefined ); // true


// function didNothing() {
// 	return;
// }

// alert(didNothing() ===  undefined);

// CHAPTER : Function expressions :






