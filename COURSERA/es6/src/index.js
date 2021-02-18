/* import Person from './person';
let pOne = new Person('Jenny Penny', 'jenne@test.com');
console.log(pOne.names);
pOne.prints();

import Students from './student.js';

let studentOne = new Students('Jerry Tom', 'jerry@tests.com', '122');
studentOne.printsOne();
*/



fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((body) => {
    // console.log(body)

    // body.map(data => console.log(data.id));

    const list = body.map(data => {
        let listOne = document.createElement('listOne');
       let textTwo = `Names: ${data.name}, Email_address: ${data.email}, UserName: ${data.username}`
        let textOneNode = document.createTextNode(textTwo);

        listOne.appendChild(textOneNode);

        return listOne;

    });
    // console.log(list);

    list.forEach((listOne) => {
    document.getElementById('clientlist').appendChild(listOne);
    })

  })
  .catch((err) => console.log(err));




