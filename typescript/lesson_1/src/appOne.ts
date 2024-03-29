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

// console.clear();

// interface Person {
//     fullName: string;
//     ages: number;
//     emailaddress: string[];// uses of string
//     isDemo: boolean; // uses of boolean
//     // personNotes: any; // uses of any
//     personNotes: unknown; // uses of unknown data type
//     // error: () => void; // uses of void
//     // error: () => never; // uses of never

// }

// function err() : never {
//    while(true) {

//    }
// }

// function addSomething(data: Person) : Person | undefined | null {

//     data.fullName = "Gony Cha"
//  return data

// }

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

// const person : Person = {

//     fullName: 'JENNY PENNY',
//     ages: 34,  // uses of number
//     emailaddress: ["coding", "working"], // uses of string
//     isDemo: true ,  // uses of boolean
//     // personNotes: undefined // uses of any(undefined/ null/ string)--> we can keep any type of data
//     personNotes: "" // uses of unknown data type (we can provide ---> {} / []/ 2/ "")
//     // error: err // uses fo never

// }

// console.log(addSomething(person));
// let res = addSomething(person)
// res.ages = 89
// if(typeof res !== 'undefined' && res !== null) {
//     res.ages = 89
// }

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


// Method : Type Interface

// let typesName : string = "TI"
// let typesAge : number = 34
// let isInterface : boolean = true
// let typesName = "TI"
// let typesAge = 34
// let isInterface = true

// function typeInference (message : string) : any {
//     // return message
//     return {
//         extra : message
//     }

// }

// let outcome : string = typeInference("I am learning typescript")
// let outcome : {extra: string} = typeInference("I am learning typescript")
// outcome = {} // we can assign object {} or, array [] also
// outcome = ""  // if we use "" string or, 1 as a value it would show us error



// let learningInterface : unknown = JSON.parse('"name" : "TI", "age" : 34')
// let learningInterface : {names : string, age : number} = JSON.parse('"name" : "TI", "age" : 34')
// learningInterface = {} // we can assign string also "".
// learningInterface = []
// let achievements : (string | number | boolean)[] = [2, "coding", 6]
// achievements.push(true)
// achievements.push()
// achievements.push({}) // will show the error

// typesName = "1"
// typesAge = 2
// isInterface = false

// METHOD : TYPE CONVERSION :


// console.clear()

// Example 1:

// interface Lessons {
//     name: string, // there is name and age property
//     age: number
// }

// interface Chapters {
//     name: string,
//     age: number,
//     strikeRate: number,
//     average: number,
// }

// const chapter : Chapters = {
//     name: 'Conversions',
//     age: 67,
//     strikeRate: 99,
//     average: 55

// }

// function shows(typeConversions: Lessons): void {
//     console.log(`name : ${typeConversions.name}\nage : ${typeConversions.age}`)

// }
// // shows({name: "Learning Typescript", age: 77})
// shows(chapter)

// let numberOne = '2'
// let numberTwo: boolean
// let numberTwo = '8'
// let outcomes = Number(numberOne) + Number(numberTwo)
// console.log(outcomes)
// RUN npm run dev in the console and check the result


// numberOne = 400
// numberTwo = "Type uses of Conversions"

// Example 2:

// let x : unknown = "Chapter Typescript"
// let task = (x as string).length
// let task = (<string>x).length
// console.log(task)



// METHODs : Understand Type Interface :

// console.clear()

// interface Method {
//     readonly chapterName: string;
//     chapterId: number;
//     chapterQuiz: string;
//     show(): void;
//     display: () => void;
// }

// const tasks: Method = {
//    chapterName: 'Uses of Interfaces',
//    chapterId: 3344,
//    chapterQuiz: "10",
//    show(): void {
//        console.log(`chapterName: ${this.chapterName}\n chapterId: ${this.chapterId}\n chapterQuiz: ${this.chapterQuiz}`);
//    },

//    display: () : void => {
//        console.log('This is interfaced')
//    }
// }

// tasks.show();
// tasks.display();

// tasks.chapterName = "Types 3"

// console.log(tasks.show())

// const labTasks = {
//     chapterName: 'UNIT NINE',
//     chapterId: 9977,
//     chapterReview: 20,
//     averageMarks: 64
// }





// function displayType(method: Method): void {
//    console.log(method.chapterName)
//    if(method.chapterId) {
//     console.log(`chapterName: ${method.chapterName} chapterId: ${method.chapterId} chapterQuiz: ${method.chapterId}`)
//    }
// //    console.log(method.chapterId)


// }

// displayType(tasks)
// displayType(labTasks)


// METHODs : Typescript Functions  :

// console.clear()

// this is optional parameter

// type logicType = (first: string, second: string, third?: number) => string
// interface doAssignment {
//     name: string,
//     age?: number,
//     member: string[],

// }


// type logicType = (first: string, second: string, third?: number, ...extraInformation: string []) => string
// type logicType = (first: string, second: string, third?: number, ...extraInformation: string []) => doAssignment

// let logic = function(intro: string, title: string, age?: number): string {
// let logic:(first: string, second: string, third: number) => string = function(intro, title, age)
// let logic: logicType = function(intro, title, age = 0)
// let logic: logicType = function(intro: string, title: string, age = 0, ...member)
//     {
//     // return intro + title + (age? age: " ")
//     // let concat = extraInformation.join(' ');
//     // return intro + title + age + concat
//     return {
//         name: intro + ' ' + title,
//         age: age,
//         member: member
//     }

// }
// let results = logic("This is ", 89, "Tile Tags ")
// let results = logic("This is ", undefined, "Title Tags ", "PLATFORM")
// let results = logic("This is ", "Title Tags ", 77, " PLATFORM", "Three four", "Hello!!")

// console.log(results)



// Method : Typescript Type aliases

// console.clear()

// type objectOne = {
//     objectname: string;
//     objectid: number;
// }

// type objectTwo = {
//     objectname: string;
//     objectid: number;
// }

// type myType = string | boolean | objectOne | objectTwo
// type MyFunType = (value: myType) => myType[]


// let aliasesType: MyFunType = (value) => {
//  arrayOne.push(value)
//  return arrayOne

// }
// let arrayOne: myType[] = []

// type Marks = "Fail" | "Pass" | "Retake"

// function allResults(num: number): Marks {
//     return "Retake"
// }



// Typescript Class & Inheritance


// method 1

console.clear()

class Human {
//    public humanName: string;
//     public humanAge: number;
    private static count = 0;

    constructor(public humanName: string, public humanAge: number) {
    //  this.humanName = humanName
    //  this.humanAge = humanAge
     Human.count++
    }

    // public sleep = (): void => {
    //     this.talk();
    // }

    public getCount(): number {
        return Human.count
    }
    // public getCount()
    // static getCount()

    protected sleep = (): void => {
        this.talk();
    }

    private talk = (): void => {
        console.log(`${this.humanName} is Talking`)
    }

}

class Person extends Human implements PersonInterface{
    // humanGender: string

    constructor(public humanGender: string, humanName: string, humanAge: number) {
      super(humanName, humanAge)
        // this.humanGender = humanGender

    }

    walk = (): void => {
        this.sleep();
        console.log(`${this.humanName} is Walking`)
    }
}

let personOne = new Person("Female", "Jenny Penny",77);
let personTwo = new Person("Male", "Gony Chaca",45);

// interface PersonInterface extends Person {
//     extra: string;

// }

interface PersonInterface {
   walk: () => void;

}

// function chapter(x: Person): Person {
//     x.humanName = 'Anonymous'
//     return x
// }

// function chapter(y: Person): Human {
    function chapter(y: Human): Human {
    // x.humanName = 'Anonymous'
    // y.getCount()
    return y
}

let personThree = chapter(personOne)
console.log(personThree.humanName)


// personOne.sleep()
// personOne.walk()
// personOne.talk()

// console.log(personOne.getCount())
// console.log(Human.count)
// console.log(personOne.humanName);

// let humanOne = new Human('Turkish Boy', 34);
// humanOne.talk()


