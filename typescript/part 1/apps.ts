// let message = "This is Typescript"
// console.log(message);
// Run this into the terminal : tsc app.ts

// Udemy Practices
// compile the code using : tsc apps.ts in the console

// Working with types & Core types or diving deeper
// Method 1

// console.clear();

// class Users {
//   name: string;
//   private age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

// }  // uses of class & inheritance


interface Greeting {
    name: string;
}

interface PrintMethod {
    print(): void;
}

// class Users {
    class Users implements Greeting, PrintMethod {


    //   constructor(public name: string, private age: number) {
        constructor(public name: string, private age: number) {}
        /*   this.name = name;
         this.age = age; */
      print() {
          console.log(this.name);
      }

}



class AdminDashBoard extends Users {
    constructor(name: string, age: number, private permissions: string[]) {
        super(name, age);
    }
}

const users = new Users('Penny', 33);
console.log(users.name);



const numbers1Input = document.getElementById('numbers1') as HTMLInputElement;
// const numbers1Input = <HTMLInputElement>document.getElementById('numbers1');
const numbers2Input = <HTMLInputElement>document.getElementById('numbers2');

const buttonElement = document.querySelector('button');

function addition(x : number, y : number) {
    return x + y;
}

type PrintModes = 'console' | 'alert';

enum OutputModes { CONSOLE, ALERT }; // uses of enum

// function printingMyResult(outcome: any) {
    // function printingMyResult(outcome, printModes: string) {
        // function printingMyResult(outcome: string | number, printModes: PrintModes) {
     function printingMyResult(outcome: string | number, printModes: OutputModes) {
    // if(printModes === 'console') {
        if(printModes === OutputModes.CONSOLE) {
        console.log(outcome);
    // } else if (printModes === 'alert') {
    } else if (printModes === OutputModes.ALERT) {
    alert(outcome);
    }

        // console.log(outcome);
    //return undefined;
}

interface CalculationContainers {
    res: number;
    // print(): void;
    print: () => void;
}


// type CalculationContainers = {
//     res: number;
//     // print(): void;
//     print: () => void;
// }



// type CalculationResult = { res: number, print: () => void }[];
type CalculationResult = CalculationContainers[];

// fetch('')

// const outcomes: CalculationResult = [];
const outcomes: Array<CalculationContainers> = [];
const names = ['Jenny'];

buttonElement.addEventListener('click', () => {
    const numbers1 = +numbers1Input.value;
    const numbers2 = +numbers2Input.value;
    const outcome = addition(numbers1, numbers2);
    // const outcomeContainer: { res: number } = {
        const outcomeContainer = {
        res: outcome,
        print() {
            console.log(this.res);
        }
    };
    outcomes.push(outcomeContainer);
    // outcomes.push(6);
    // printingMyResult(outcomeContainer.res);
    // printingMyResult(outcomes);
    // outcomes[0].print();
    // printingMyResult(outcome, 'console');
    // printingMyResult(outcome, 'alert');
    printingMyResult(outcome, OutputModes.CONSOLE);
    printingMyResult(outcome, OutputModes.ALERT);
    // printingMyResult(outcome, 'window');
});

// const outcome = addition(6, 7);
// let isDoing = false;

// printingMyResult(outcome);

// console.log(outcome);

// function logAndecho(value: any) {
    function logAndecho<T>(value: T) {
    console.log(value);
    return value;
}

logAndecho<string>('Hey Typescript').split(' ');



