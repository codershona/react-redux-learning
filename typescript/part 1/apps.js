// let message = "This is Typescript"
// console.log(message);
// Run this into the terminal : tsc app.ts
// Udemy Practices
// Working with types & Core types or diving deeper
// Method 1
console.clear();
var numbers1Input = document.getElementById('numbers1');
var numbers2Input = document.getElementById('numbers2');
var buttonElement = document.querySelector('button');
function addition(x, y) {
    return x + y;
}
// function printingMyResult(outcome: any) {
function printingMyResult(outcome) {
    console.log(outcome);
    //return undefined;
}
buttonElement.addEventListener('click', function () {
    var numbers1 = +numbers1Input.value;
    var numbers2 = +numbers2Input.value;
    var outcome = addition(numbers1, numbers2);
    printingMyResult(outcome);
});
// const outcome = addition(6, 7);
// let isDoing = false;
// printingMyResult(outcome);
// console.log(outcome);
