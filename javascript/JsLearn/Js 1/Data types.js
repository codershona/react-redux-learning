// Data types:


// Methods of primitives:
// let str = "Hello";

// alert( str.toUpperCase() ); // HELLO

// let person = "Hello John";
// alert( person.toUpperCase() );

// method 2

// let n = 1.23456;

// alert( n.toFixed(2) ); // 1.23

// let x = 1.3333;
// alert(x.toFixed(3));

// method 3

// let zero = new Number(0);

// if (zero) { // zero is true, because it's an object
//   alert( "zero is truthy!?!" );
// }

// let hero = new Number(1);
// if (hero) {
//     alert("hero is testing");
// }



// method 4

// let str = "Hello";

// str.test = 5; // (*)

// alert(str.test);

// let num = "Hello Js";
// num.test = 6;
// alert(num.test);


// Numbers:

// method 1:

// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

// alert( a == b ); // true, the same number 255 at both sides

// method 2:
// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111

// let x = 0b1111111;
// let y = 0o477;
// alert( x == y);

// let person = 344;
// alert(person.toString(12));
// alert(person.toString(4));



// method 3:
// let num = 1.23456;

// alert( Math.floor(num * 100) / 100 );

// let number = 3.44445;
// alert( Math.floor(number * 103) / 200 );



// method 4:

// let num = 12.36;
// alert( num.toFixed(1) ); 

// let numbers = 22.34;
// alert( numbers.toFixed(2) );

// method 5:

// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert( a + b );


// let x = +prompt("this is a number", "");
// let y = +prompt("this has two values with", "");
// alert( x + y );


// method 6:

// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Read: ${readNumber()}`);

//   function catchName() {
//       let number;
//       do {
//           number = prompt("hello", 2);
//       } while (!isDefinite(number));
//       if (number === null num === '') return null;
//       return +number;
//   }
//   alert(`Reding : ${catchName()}`);


// method 7:

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }

// let a = 0;
// while (a < 12) {
//     a += 0.5;
//     if (a > 5.7 && a < 20.3) alert(a);
// }
// alert(a);


// method 8:

// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }
  
//   alert( random(1, 5) );
//   alert( random(1, 5) );
//   alert( random(1, 5) );


// method 9:

// function randomInteger(min, max) {
//     // now rand is from  (min-0.5) to (max+0.5)
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }
  
//   alert( randomInteger(1, 3) );

// method 10:

// function randomInteger(min, max) {
//     // here rand is from min to (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );


// Strings :

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// let string = "Currently learning strings";
// let targets = "why";
// let position = -2;
// while((position = string.indexOf(targets, position + 2)) != -2) {
//     alert(position);
// }


// method 2:

// let str = "Widget with id";

// if (str.indexOf("Widget")) {
//     alert("We found it"); // doesn't work!
// }

// let strings = "Many strings working";
// if (strings.indexOf("noop..")) {
//     alert("here we are");
// }


// method 3:

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("We found it"); // works now!
// }

// let string1 = "Many strings working";
// if (string1.indexOf("noop..") != -1) {
//     alert("here we are");
// }

// method 4:

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }
//   alert( extractCurrencyValue('$120') === 120 );

//   function wasCurrencyValues(string2) {
//       return +string2.slice(2);
//   }
//   alert(wasCurrencyValues('$4444') === 220);

  // method 5:

//   function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

// function isValue(string3, maxlength) {
//     return(string3.length > maxlength) ?
//     string3.slice(0, maxlength -2) + '...' : string3;
// }
// isValue("here we are?", 34) = "hiiiiii"


// method 6:
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );


// function checkRight(string4) {
//     let lesserstring = string4.toLowerCase();
//     return lesserstring.includes('hello baby') || lesserstring.includes('kkkkk');   
// }

// alert( checkRight('buy ViAgRA now....') );
// alert( checkRight('free xxxxx...') );
// alert( checkRight("innocent rabbit...") );

  // method 7:

//   function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("john") ); // John


//   function isWrite(string5) {
//       if (!string5) return string5;
//       return string5[0].toUpperCase() + string5.slice(2);
//   }

//   alert(isWrite("jenny"));


// Arrays :

// method 1: pop
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

// method 2: push
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

// method 3: shift
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear

// method 4: unshift
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear


// method 5:

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}


// method 6:

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

// method 7:

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4


// method 8:

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// method 9:

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}



// method 10:
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );



  //method 11:

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0



// Array methods :
















