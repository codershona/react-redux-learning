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


function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) is cached
alert( "Again: " + slow(1) ); // the same

alert( slow(2) ); // slow(2) is cached
alert( "Again: " + slow(2) ); // the same as the previous line


// method 2

// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

alert( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined



// method 3

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // works
alert( worker.slow(2) ); // works, doesn't call the original (cach



// method 4


let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(3, 5) ); // works
alert( "Again " + worker.slow(3, 5) ); // same (cached)




// method 5

function spy(func) {

  function wrapper(...args) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}



// method 6

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms



// method 7

function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}



// method 8

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}



//////////  Function binding /////////










