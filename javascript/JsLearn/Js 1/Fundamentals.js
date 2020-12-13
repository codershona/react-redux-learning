

    alert('Hello');
    // alert('World');

  //   alert(3 +1 + 2);

  //   alert("some code");
  //   // "use strict" below is ignored--it must be at the top

     "use strict";

  //    // strict mode is not activated


  //    // Variables

  //  let message;
  //   message = 'This is a Javascript variables';

  //    alert(message);


  //    let example = 'This is using let variables'; // define the variable and assign the value

  //     alert(example); // Hello!

  //     let persons = 'Lila', 
  //     age = 24, 
  //     shorts = 'Multiple declare';

  //     var exampleOne = 'Hello Javascript';

 
  //   // method 2

  //     let methodTwo;

  //    methodTwo = 'Variables Structures';

  //     methodTwo = 'One and Two'; // value changed

  //    alert(methodTwo);

  //    // method 3


  //    let methodFour = 'Working method three';

		// let methodThree;

		// // copy 'Hello world' from hello into message
		// methodThree = methodFour;

		// // now two variables hold the same data
		// alert(methodFour); // Hello world!
		// alert(methodThree); // Hello world!


		// // variable naming 


		// let userName;
  //      let test123;


  //      let let = 5; // can't name a variable "let", error!
  //       let return = 5; // also can't name it "return", error!
  //       let function = 5;
  //       let class = 5;



        // const myBirthday = '18.04.1982';

        //  myBirthday = '01.01.2001';


  //        const COLOR_RED = "#F00";
		// const COLOR_GREEN = "#0F0";
		// const COLOR_BLUE = "#00F";
		// const COLOR_ORANGE = "#FF7F00";

		// // ...when we need to pick a color
		// let color = COLOR_ORANGE;
		// alert(color); // #FF7F00

		// const pageLoadTime =  time taken by a webpage to load ;


		// declare by var/let or const

		// const STRING_ONE = "1";
		// const STRING_TWO = "2";
		// const STRING_THREE = "3";
		// const stringLoadingTime = "8";


		// const strings = STRING_TWO;
		// const loading = stringLoadingTime;
		// alert(loading);
		// alert(strings);



   // Data types

   // alert( 1 / 0 );
   // alert( Infinity );

   // alert( "not a number" / 2 ); // NaN, such division is erroneous

   // alert( "not a number" / 2 + 5 );

   //  alert( "not a number" / 3 ); 
   //   alert( "not a number" / 5 + 6 ); 
   // // string

  //    let users = "MILI";

		// // embed a variable
		// alert( `This is , ${users}!` ); // Hello, John!

		// // embed an expression
		// alert( `Her score is  ${6 + 9}` ); // the result is 3



		// // Boolean (logical type)

		// let isLoading = 7 > 2;

  //      alert( isLoading ); // true (the comparison result is "yes")


   // undefined


   // let age = 100;

   // // change the value to undefined
   // age = undefined;

   //   alert(age);


// interactions

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!

 
 let str = prompt('Hi howdy', 200);
alert(`How ${str} is th weather`);

// prompt uses
// let test = prompt("Test");
let name = prompt("Your Name");
// let tests = prompt("Tests", ''); // <-- for IE
let names = prompt("Names", ''); // <-- for IE

// confirm uses

// let isBoss = confirm("Are you the boss?");

// alert( isBoss ); // true if OK is pressed

let isStr = confirm("Do you want to delete thisname");

alert( isStr ); // true if OK is pressed





// The typeof operator

// Type Conversions

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


let num = true;
alert(typeof num); // boolean

num = String(num); // now value is a string "true"
alert(typeof num); // string



// alert( "6" / "2" ); // 3, strings are converted to numbers

alert( "8" / "4" ); // 3, strings are converted to numbers


// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number



let users = "222";
alert(typeof users); // string

let number = Number(users); // becomes a number 123

alert(typeof number); // number


// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0


// alert( Numbers("   333   ") ); // 123
// alert( Numbers("444z") );      // NaN (error reading a number at "z")
// alert( Numbers(true) );        // 1
// alert( Numbers(false) );       // 0

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello Javascript") ); // true
// alert( Boolean("") ); // false



// Basic operators, maths  :

// Terms: “unary”, “binary”, “operand”


let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

let y = 2;
y = -y;
alert( y );

let b = 2, a = 4;
alert( a - b );

// remainder

// alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

alert( 6 % 3 ); // 1, a remainder of 5 divided by 2
alert( 9 % 2 ); // 2, a remainder of 8 divided by 3


// Exponentiation **

alert( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)


alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// String concatenation with binary +


alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


// Numeric conversion, unary +

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0


// method 3

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings



let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


// Operator precedence


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0


let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4



// Modify-in-place


let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


let n = 2;

n *= 3 + 5;

alert( n ); // 16  (right part evaluated first, same as n *= 8)




// Increment/decrement


let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3



let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1


let counter = 1;
let a = ++counter; // (*)

alert(a); // 2


let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1


let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same


let counter = 0;
alert( ++counter ); // 1


// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )



// 1
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

alert( ++a );
alert( b++);
alert( a );
alert( b );

let a = 2;

let x = 1 + (a *= 2);

alert( x );


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12




