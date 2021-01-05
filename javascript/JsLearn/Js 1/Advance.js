///////// Variable scope, closure : ///////

// function testingOne() {
//     let value = Math.random();

//     function testingtwo() {
//       debugger; // in console: type alert(value); No such variable!
//     }

//     return testingtwo;
//   }

//   let testingtwo = testingOne();
//   testingtwo();


// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }

// let g = f();
// g();


// Filter inBetween
// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) );


// Filter inArray
// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) );



// Global object

// Function object, NFE

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// alert(f1.length); // 1
// alert(f2.length); // 2
// alert(many.length); // 2



// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }

//   }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
//   ask("Question?", () => alert('You said yes'), result => alert(result));

//     function methodOne(search, ...searchTerms) {
//         let isSearch = confirm(search);
//         for (let handler of searchTerms) {
//             if (handler.length == 0) {
//                 if (isSearch) handler();
//             } else {
//                 handler(isSearch);
//             }

//         }
//     }

// methodOne("Question?....", () => alert('You said yes'), result => alert(result));

//   function makeCounter() {
//     let count = 0;

//     function counter() {
//       return count++;
//     }

//     counter.set = value => count = value;

//     counter.decrease = () => count--;

//     return counter;
//   }


    // function setCounter() {
    //     let counter = 0;
    //     function Counter() {
    //         return counter++;
    //     }
    //     Counter.set = value => counter = value;
    //     Counter.decrease = () => counter--;
    //     return Counter;
    // }


//   function sum(a) {

//     let currentSum = a;

//     function f(b) {
//       currentSum += b;
//       return f;
//     }

//     f.toString = function() {
//       return currentSum;
//     };

//     return f;
//   }

//   alert( sum(1)(2) ); // 3
//   alert( sum(5)(-1)(2) ); // 6
//   alert( sum(6)(-1)(-2)(-3) ); // 0
//   alert( sum(0)(1)(2)(3)(4)(5) );




  ////// The "new Function" syntax//////

//   function getSyntax() {
//       let value = "testing new feature functions";
//       let syntax = new Syntax('alert(value)');
//       return syntax;
//   }
//    getSyntax()();
//   function getFunc() {
//     let value = "test";

//     let func = new Function('alert(value)');

//     return func;
//   }

//   getFunc()(); // error: value is not defined


//   function getFunc() {
//     let value = "test";

//     let func = function() { alert(value); };

//     return func;
//   }
  
//   getFunc()(); // "test", from the Lexical Environment of getFunc

//    function getFunction() {
//        let value = "testing lexical function";
//        let function1 = Function()
//        return function1;
//    }
//    getFunction()();

  /////     Scheduling: setTimeout and setInterval ///////

  // function sayHi() {
  //   alert('Hello');
  // }
  
  // setTimeout(sayHi, 1000);


  // function Zero() {
  //   alert('Hjjj');
  // }
  // setTimeout(Zero, 1500);


  // function sayHi(phrase, who) {
  //   alert( phrase + ', ' + who );
  // }

  // setTimeout(sayHi, 1000, "Hello", "John");

  // function ZerOne(see, watch) {
  //   alert(see + ', ' + watch);
  // }
  // setTimeout(ZerOne, 1500, "Zello", "Jenny");
  // setTimeout(() => alert('Zello'), 1500);


//   let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// clearTimeout(timerId);
// alert(timerId);

// let melloId = setTimeout(() => alert("cdsjfhewf"), 1200);
// alert(melloId);
// clearTimeout(melloId);
// alert(melloId);



// repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


// method 1:

// function goSaga(here, now) {
//   let why = here;

//   let sagaId = setInterval(function() {
//     alert(why);
//     if (why == now) {
//       clearInterval(sagaId);
//     }
//     why++;
//   }, 1200);

// }

// goSaga(6, 9);

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// // usage:
// printNumbers(5, 10);


// method 2:

// using nested setTimeout

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// // usage:
// printNumbers(5, 10);

// method 3

// function printNumbers(from, to) {
//   let current = from;


//   function go() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }

//   go();
//   let timerId = setInterval(go, 1000);
// }

// printNumbers(5, 10);



// method 4:

// let i = 0;

// setTimeout(() => alert(i), 100); // 100000000

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }


// let n = 0;

// setTimeout(() => alert(n), 120);
// for(let y = 0; y < 10000000; y++) {
//   n++;
// }





////////   Decorators and forwarding, call/apply ////////









