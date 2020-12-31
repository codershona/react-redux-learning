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
// let fruits = ["Apple", "Orange", "Pear"];

// alert( fruits.pop() ); // remove "Pear" and alert it

// alert( fruits ); // Apple, Orange

// method 2: push
// let fruits = ["Apple", "Orange"];

// fruits.push("Pear");

// alert( fruits ); // Apple, Orange, Pear

// method 3: shift
// let fruits = ["Apple", "Orange", "Pear"];

// alert( fruits.shift() ); // remove Apple and alert it

// alert( fruits ); // Orange, Pear

// method 4: unshift
// let fruits = ["Orange", "Pear"];

// fruits.unshift('Apple');

// alert( fruits ); // Apple, Orange, Pear


// method 5:

// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }



// let person = ["mina", "bina", "lina"];

// let personTwo = ["bina", "lina", "tiya"];
// for (let x = 0; x < personTwo.length; x++) {
//   alert(person[x]);
// }

// alert(person.pop());
// alert(person);

// alert(person.shift());
// alert(person);

// let person1 = ["bina", "lina"];
// alert(person1.unshift('mina'));
// alert(person1);

// let persons = ["mina", "bina"];
// persons.push("Qmya");
// alert(persons);



// method 6:

// let arr = ["Apple", "Orange", "Pear"];

// for (let key in arr) {
//   alert( arr[key] ); // Apple, Orange, Pear
// }


// let baby = ["grape", "fox", "bear"];
// for (let key in baby) {
//   alert(baby[key]);
// }

// method 7:

// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

// alert( fruits.length ); // 4

// let animals = ["dog", "cat", "monkey"];
// let flowers = animals;
// flowers.push("Hasna hena");
// flowers[Math.floor((flowers.length - 1) / 2)] = "Manys";
// alert(flowers.shift());
// flowers.unshift("Keno", "kihoce");
// alert(animals.length);

// method 8:

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");

// method 9:

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // a,b,function(){...}



// method 10:



// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("A number please?", 0);
  
//       // should we cancel?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );


  // function personOne() {
  //   let persons = [];
  //   while (true) {
  //     let counts = prompt("how many persons are there?", 0);
        
  //     if (count === "" || value === null || !isFinite(count)) 
  //     break;

  //     persons.push(+count);

  //     let balls = 0;
  //     for (let person of persons) {
  //       balls += person;
  //     }
  //     return balls;
  //   }
    
  // }
  // alert( personOne() );



  //method 11:

  // function getMaxSubSum(arr) {
  //   let maxSum = 0;
  //   let partialSum = 0;
  
  //   for (let item of arr) { // for each item of arr
  //     partialSum += item; // add it to partialSum
  //     maxSum = Math.max(maxSum, partialSum); // remember the maximum
  //     if (partialSum < 0) partialSum = 0; // zero if negative
  //   }
  
  //   return maxSum;
  // }
  
  // alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  // alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  // alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  // alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  // alert( getMaxSubSum([1, 2, 3]) ); // 6
  // alert( getMaxSubSum([-1, -2, -3]) ); // 0


//  function getPerson(arr) {
//     let maxPersons = 0;
//     let partialPerson1 = 0;
  
//     for (let item of arr) { // for each item of arr
//       partialPerson1 += item; // add it to partialSum
//       maxPersons = Math.max(maxPersons, partialPerson1); // remember the maximum
//       if (partialPerson1< 0) partialPerson1= 0; // zero if negative
//     }
  
//     return maxPersons;
//   }
  
//   alert( getPerson([-1, 2, 3, -9]) ); // 5
//   alert( getPerson([-1, 2, 3, -9, 11]) ); // 11
//   alert( getPerson([-2, -1, 1, 2]) ); // 3
//   alert( getPerson([100, -9, 2, -3, 5]) ); // 100
//   alert( getPerson([1, 2, 3]) ); // 6
//   alert( getPerson([-1, -2, -3]) ); // 0
  


// Array methods :




// let arr = ["I", "go", "home"];

// delete arr[1]; // remove "go"

// alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
// alert( arr.length ); // 3



// method 2:

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// alert( arr ); // ["I", "JavaScript"]



//method 3:

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// let removed = arr.splice(0, 2);

// alert( removed ); // "I", "study" <-- array of removed elements

// method 4:

// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// alert( arr.slice(-2) ); // s,t (copy from -2 till the end)



// method 5:

// let arr = [1, 2];

// // create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// let arrayTwo = [2, 4];
// alert(arrayTwo.concat([6, 9]));
// alert(arrayTwo.concat([6, 9], [1, 2]));
// alert(arrayTwo.concat([6, 9], 8, 0));

// let array = ["hello", "hey", "whatever"];
// delete array[1];
// alert(array[1]);
// alert(array.length);

// let arrayOne = ["I", "learn", "javascript", "java"];
// arrayOne.splice(1, 1);
// let removed = arrayOne.splice(0, 1);
// alert (removed);
// alert(arrayOne);
// alert(arrayOne.slice(1, 3));
// alert(arrayOne.slice(-2));

// let person = [3, 4];
// let personLike = {
//   0: "nothing",
//   length: 1
// };

// alert(person.concat(personLike));

// method 6:
// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// alert( arr.concat(arrayLike) ); // 1,2,[object Object]



// method 7:


// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// alert( arr.concat(arrayLike) ); // 1,2,something,else

// let arrayThree = [3, 4];
// let arraythree = {
//   0: "nothing",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 3
// };

// alert(person.concat(personLike));

// let myarr = [2, 0, false];
// alert(myarr.indexOf(0));
// alert(myarr.indexOf(false));
// alert(myarr.indexOf(null));
// alert(myarr.includes(1));

// method 8:

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true



// method 9:

// const arr = [NaN];
// alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
// alert( arr.includes(NaN) );// true (correct)

// const personfour = [NaN];
// alert(personfour.indexOf(NaN));
// alert(personfour.includes(NaN));

//method 10:

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // John

// let peoples = [
//   {
//     id: 11, names: "karan"
//   },
//   {
//     id: 22, names: "karena"
//   },
//   {
//     id: 44, names: "Marani"
//   }
// ];
// let peoplestwo = peoplestwo.find(item => item.id == 1);
// alert(peoplestwo.names);
// let peoplesOne = ["Jasb", "JAcob", "Jerry"].map(item => item.peoplesOne);
// alert(peoplesOne);
// method 11:

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6


// method 12:

// let arr = [ 1, 2, 15 ];

// // the method reorders the content of arr
// arr.sort();

// alert( arr );  // 1, 15, 2



// method 13:

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr);  // 1, 2, 15



// // method 14:

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
//   return a - b;
// });


// // method 15

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1


// // method 16:

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }


// // method 17

// let arr = [1, 2, 3, 4, 5];

// // removed initial value from reduce (no 0)
// let result = arr.reduce((sum, current) => sum + current);

// alert( result ); // 15


// // method 18

// alert(typeof {}); // object
// alert(typeof []); // same



// // method 19

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };

// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // find users, for who army.canJoin returns true
// let soldiers = users.filter(army.canJoin, army);

// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23




// // method 20

// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }



// // method 21:

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }



// // method 22: 
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O




// // method 23

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // 28



// // method 24

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);


// // method 25

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now sorted is: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete



// // method 26

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }



// //  method 27


// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );


// // method 28

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]




// // method 29


// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)


// Iterables :

// let range = {
//   from: 1,
//   to: 5
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function() {

//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with this iterator, asking it for next values
//   return {
    // current: this.from,
    // last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    // next() {
      // 4. it should return the value as an object {done:.., value :...}
      // if (this.current <= this.last) {
        // return { done: false, value: this.current++ };
      // } else {
      //   return { done: true };
      // }
//     }
//   };
// };

// now it works!
// for (let num of range) {
//   alert(num); // 1, then 2, 3, 4, 5
// }


// let person5 = {
//   from: 2,
//   to: 6
// };
// person5[Symbol.iterator] = function() {
//   return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return {done: false, value: this.current++};

//         } else {
//           return {done: true};
//         }

//       }


//   };

// };

// for (let num of person5) {
//   alert(num);
// }

// // method 2:

// let iterables = "hiii";
// let iterator = iterables[Symbol.iterator]();
// while (true) {
//   let iterator1 = iterator.next();
//   if (iterator1.done) break;
//   alert(iterator1.value);
// }

// let str = "Hello";

// does the same as
// for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   alert(result.value); // outputs characters one by one
// }

// function slice(strings, defer, ending) {
//   return Array.from(strings).slice(defer, ending).join('');
// }
// let strings = "no way";
// alert(slice(strings, 4, 8));
// alert(strings.slice(strings, 4, 8));

// function slice(str, start, end) {
//   return Array.from(str).slice(start, end).join('');
// }

// let str = '𝒳😂𩷶';

// alert( slice(str, 1, 3) ); // 😂𩷶

// // the native method does not support surrogate pairs
// alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)



// Maps and sets:

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys); // name, more


//method 2

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );

// method 3

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");


// method 4
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// // done!
// // obj = { banana: 1, orange: 2, meat: 4 }

// alert(obj.orange); // 2


// method 5

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// // now prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange); // 2



// method 6

// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// alert( map.get('name') ); // John


// let object = {
//   names: "Jenny",
//   year: 20
// };
// let maps = new Map(Object.entries(object));
// alert(maps.get('names'));


// Object.keys, values, entries:

// function sumSalaries(salaries) {

//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum; // 650
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) );





/////     Advanced working with functions //////////









