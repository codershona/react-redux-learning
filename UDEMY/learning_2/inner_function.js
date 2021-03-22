// inner function


// function outerFunction() {
//     var a = 20;
//  function innerFunction() {
//    // var a = 20;
//    a;
//      console.log('I am learning Inner Function');
//  }
//  // a;
//  innerFunction();
//  console.log('Inner Function Chapter Two');
// }
// outerFunction();


// method 2

function add(a, e) {
    function addition() {
      return a + e;
    }
  
    function subtract() {
      return a - e;
    }
    function multiplication() {
      return a * e;
    }
    function division() {
      return a / e
    }
    return addition() + subtract() + multiplication() + division();
  }
  
  var output = add(20, 5);
  console.log(output);


  
