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





