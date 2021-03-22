// Callback Function Postmortem

// method 1
// function hooksOne(fullname) {
//     print(fullname);
//     print('Something Else!');
// }

// function print(args) {
//     console.log(args);
// }

// hooksOne('Barbie Doll');

// method 2

// function searchHooks(surname, print) {
//     print(surname);
// }
// searchHooks('Jennifer Winget', print);


// function print(args) {
//     console.log(args);
// }


// searchHooks('Jennifer Winget', function(surname) {
//     console.log('This is Callback Function ' + surname);

// });

// searchHooks('Jennifer Winget', function(surname) {
//     console.log('Using Postmortem also ' + surname);

// });

// searchHooks('Barbie Doll', function(surname) {
//     console.log('This is also most important ' + surname + ' Next, ' + surname.length);

// });


// method 2

// var query = {
//     surname: 'Jinia KK',
//     age: 24,
//     email: 'jinia@test.com'
// }

// function printQuery(person, callback) {
//     console.log('Person: ' + person.surname + ' (' + person.age + ')');
//     if (person.age >= 19) {
//         callback(person.email);
//     } else {
//         console.log('This was small method..')
//     }
// }

// printQuery(query, function(email) {
//    console.log('EMAIL HAS BEEN SENT! ' + email);
// });



// method 3

function print(data, callbackOne, callbackTwo) {
    console.log('Genuine Data: ' + data);
    callbackOne(data);
    callbackTwo(data);
}

print("This is about javascript call back function", function(data) {
    var data = data.toUpperCase;
    console.log('Uppercase: ' + data);

}, function(data) {
    var data = data.toLowerCase();
    console.log('Lowercase: ' + data);
    console.log('Lowercase: ' + data.length);
});

