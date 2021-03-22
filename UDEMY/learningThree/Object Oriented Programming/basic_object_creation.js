// Basic Object Creation

// method 1:
// var obj = {};
// var objOne = new Object;

// console.log(obj);
// console.log(objOne);


// method 2: https://
// var bookDetails = {
//     fullname: 'Functional Javascript',
//     bookauthor: 'John Abraham',
//     publisher: '0\'Manilla',
//     page: 355
// }

// console.log(bookDetails);

// method 3:
var bookDetails = {
    fullname: 'OOP Uses Functional Javascript',
    bookauthor: 'John Abraham',
    publisher: '0\'Manilla',
    page: 355,

    print: function() {
        console.log(this.fullname, this.bookauthor);
    }
}

// console.log(bookDetails);

// book.print();

// console.log('All Books Names: ' + bookDetails.fullname);
// console.log('All Authors Names : ' + bookDetails['bookauthor']);

console.log('The Book Published Year: ' + bookDetails.publishYear);

bookDetails.publishYear = 2021;

console.log('The Book Published Year: ' + bookDetails.publishYear);

bookDetails['bookprice'] = 55;

console.log('The books price is : ' + '$' + bookDetails.bookprice);


for (var props in bookDetails) {
    // console.log(props);
    console.log(props + ' = ' + bookDetails[props]);
}


