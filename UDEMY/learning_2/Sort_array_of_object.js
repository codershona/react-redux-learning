// Sort Array of Object

// method 1
// var arr = [1, 3 , 6, 44, 66, 33, 88, 22, 44];

// // arr.sort();
// arr.sort(function(x, y) {
//     // return x - y;
//     return x + y;
// });

// // arr;
// console.log(arr);

// method 2



var querySearch = [
    {
    fullname: 'Hina Desai', age: 28
   },
{
  fullname: 'Mina Desai', age: 21
},
{
    fullname: 'Riya Sen', age:10
},
{
    fullname: 'Jiya Sen', age:15
},
{
    fullname: 'Sudipta Dutta', age:30
}
]

// querySearch.sort();
// querySearch.sort(function(x, y) {
//     return x.age - y.age;
// });

// querySearch.sort(function(x, y) {
//     return x.fullname - y.fullname;
// });


querySearch.sort(function(x, y) {
    if (x.fullname > y.fullname) {
        return 1;
    } else if (x.fullname < y.fullname) {
        return -1;
    } else {
        return 0;
    }
}); // this method sort result will come alphabetically if we have one or more object



console.log(querySearch);

