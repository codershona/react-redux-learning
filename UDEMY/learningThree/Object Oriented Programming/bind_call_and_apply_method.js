// Bind call and apply methods

// method 1


function bindCall() {
  console.log("this method needs to call bind " + this.id);
}

var objectOne = {
    id: 'Binding Called',
    number: 1111
}

var objectTwo = {
    id: 'Applying Method',
    mailing: 'method@test.com'
}

// console.log(bindCall.bind(objectOne));
// var bindedOne = bindCall.bind(objectOne);
// var bindedTwo = bindCall.bind(objectTwo);
// bindCall();

// bindedOne();
// bindedTwo();

bindCall.call(objectOne);
bindCall.call(objectTwo);



// method 2

function additionOne(x, y) {
    return (x + y) * this.z;
}


var object1 = {
    z: 4
}

var object2 = {
    z: 6
}

var result = additionOne.call(object1, 22, 44);
result;

var resultOne = additionOne.apply(object2, [66, 99]);

resultOne;

var bindedOne = additionOne.bind(objectOne);

console.log(bindedOne(120, 899));



