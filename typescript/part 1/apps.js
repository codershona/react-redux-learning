"use strict";
// let message = "This is Typescript"
// console.log(message);
// Run this into the terminal : tsc app.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Users {
var Users = /** @class */ (function () {
    //   constructor(public name: string, private age: number) {
    function Users(name, age) {
        this.name = name;
        this.age = age;
    }
    /*   this.name = name;
     this.age = age; */
    Users.prototype.print = function () {
        console.log(this.name);
    };
    return Users;
}());
var AdminDashBoard = /** @class */ (function (_super) {
    __extends(AdminDashBoard, _super);
    function AdminDashBoard(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return AdminDashBoard;
}(Users));
var users = new Users('Penny', 33);
console.log(users.name);
// const numbers1Input = document.getElementById('numbers1') as HTMLInputElement;
var numbers1Input = document.getElementById('numbers1');
// const numbers1Input = <HTMLInputElement>document.getElementById('numbers1');
var numbers2Input = document.getElementById('numbers2');
var buttonElement = document.querySelector('button');
// if (buttonElement) {
//     buttonElement
// }
function addition(x, y) {
    return x + y;
}
var OutputModes;
(function (OutputModes) {
    OutputModes[OutputModes["CONSOLE"] = 0] = "CONSOLE";
    OutputModes[OutputModes["ALERT"] = 1] = "ALERT";
})(OutputModes || (OutputModes = {}));
; // uses of enum
// function printingMyResult(outcome: any) {
// function printingMyResult(outcome, printModes: string) {
// function printingMyResult(outcome: string | number, printModes: PrintModes) {
function printingMyResult(outcome, printModes) {
    // if(printModes === 'console') {
    if (printModes === OutputModes.CONSOLE) {
        console.log(outcome);
        // } else if (printModes === 'alert') {
    }
    else if (printModes === OutputModes.ALERT) {
        alert(outcome);
    }
    // console.log(outcome);
    //return undefined;
}
// fetch('')
// const outcomes: CalculationResult = [];
var outcomes = [];
var names = ['Jenny'];
buttonElement.addEventListener('click', function () {
    var numbers1 = +numbers1Input.value;
    var numbers2 = +numbers2Input.value;
    var outcome = addition(numbers1, numbers2);
    // const outcomeContainer: { res: number } = {
    var outcomeContainer = {
        res: outcome,
        print: function () {
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
function logAndecho(value) {
    console.log(value);
    return value;
}
logAndecho('Hey Typescript').split(' ');
