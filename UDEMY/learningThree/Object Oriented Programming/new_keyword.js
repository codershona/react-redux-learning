// New Keyword

// method 1

function searchEngine(tasks) {
    this.tasks = tasks;
}

searchEngine.prototype.printTasks = function() {
    console.log(this.tasks);
}

function mySearch(constructor) {
    var object = {};
    Object.setPrototypeOf(object, constructor.prototype);
    // console.log(arguments)

    // var argsArrays = arguments.slice(0);
    var argsArrays = Array.prototype.slice.apply(arguments);
    constructor.apply(object, argsArrays.slice(1));
    return object;
}

var tasksFour = mySearch(searchEngine, 'Javascript!!!');

tasksFour.printTasks();


var HereOne = function(chapter, id) {
    this.chapter = chapter;
    this.id = id;
}

var para1 = mySearch(searchEngine, "Huey dtrr", 66);

// para1 // we can call it into console

// var tasksThree = mySearch(searchEngine, 'Newwwwww', 'Latestttt');

// var tasksOne = new searchEngine('New Tasks are given!');
// var tasksTwo = new searchEngine('OLDTasks are Deleted!');


// tasksOne.printTasks();




