// let messages = "Hello Typescript"

// console.log(messages);

// function add(a : number, b : number) {
//     return a + b;
// }
// console.log(add(2, 6));

// uses of string and number

// function addAge(obj : Person) : Person {
//     obj.ages += 1
//     return obj
// }

// interface Person {
//     fullName: string;
//     ages: number;
// }

// const person : Person = {

//     fullName: 'JENNY PENNY',
//     ages: 34
// }
// console.log(addAge(person));

// const value = addAge(person);
// value.fullName = "This is Use of Typescript"
// console.log(value);


// uses of array

console.clear();

interface Person {
    fullName: string;
    ages: number;
    emailaddress: string[];// uses of string
    isDemo: boolean; // uses of boolean
    // personNotes: any; // uses of any
    personNotes: unknown; // uses of unknown data type
    // error: () => void; // uses of void
    // error: () => never; // uses of never

}

// function err() : never {
//    while(true) {

//    }
// }

function addSomething(data: Person) : Person | undefined | null {

    data.fullName = "Gony Cha"
 return data

}

// function addEmails(data: Person, emailad: string) : void {
//   data.emailaddress.push(emailad);
//   // return emailad
//   console.log(data);
// }

// function addExtra(value : any) : void {

// function addExtra(value : unknown) : void {
//     person.personNotes = value;
//     console.log(person.personNotes);

// }

// function changeDemoStatus(status : boolean) : void {

//    status = !status;
//    console.log(status);
// }

const person : Person = {

    fullName: 'JENNY PENNY',
    ages: 34,  // uses of number
    emailaddress: ["coding", "working"], // uses of string
    isDemo: true ,  // uses of boolean
    // personNotes: undefined // uses of any(undefined/ null/ string)--> we can keep any type of data
    personNotes: "" // uses of unknown data type (we can provide ---> {} / []/ 2/ "")
    // error: err // uses fo never

}

// console.log(addSomething(person));
let res = addSomething(person)
// res.ages = 89
if(typeof res !== 'undefined' && res !== null) {
    res.ages = 89
}

// addEmails(person, "dancing");
// changeDemoStatus(person.isDemo);
// addExtra({
//     extra: "Typescript Data types basics"
// })

// let unknownTip : unknown
// let anything : any

// unknownTip = "Uses of typescript"
// anything = "Typescript Beginner Level"


// person.ages = anything
// person.personNotes = unknownTip
// console.log(person);


