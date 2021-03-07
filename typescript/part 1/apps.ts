// let message = "This is Typescript"
// console.log(message);
// Run this into the terminal : tsc app.ts

// Udemy Practices


// Working with types & Core types or diving deeper
// Method 1

console.clear();


const numbers1Input = document.getElementById('numbers1') as HTMLInputElement;
const numbers2Input = <HTMLInputElement>document.getElementById('numbers2');

const buttonElement = document.querySelector('button');

function addition(x : number, y : number) {
    return x + y;
}



// function printingMyResult(outcome: any) {
    function printingMyResult(outcome) {
    console.log(outcome);
    //return undefined;
}

buttonElement.addEventListener('click', () => {
    const numbers1 = +numbers1Input.value;
    const numbers2 = +numbers2Input.value;
    const outcome = addition(numbers1, numbers2);
    const outcomeContainer: object = {
        res: outcome
    };
    printingMyResult(outcomeContainer);
});

// const outcome = addition(6, 7);
// let isDoing = false;

// printingMyResult(outcome);

// console.log(outcome);





