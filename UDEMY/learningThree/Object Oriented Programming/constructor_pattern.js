// Constructor Pattern

// method 1:

// var Barbiebook = [
//     {
//         cartoonName: 'Using Object Oriented Programming',

//     },
//     {
//         cartoonName: 'This is about Contructor Pattern',
//     }
// ]



// function Character() {
//    console.log('I am studying constructor in the pattern');
// }


function Character(cartoonName, cartoonEmail) {
    this.cartoonName = cartoonName;
    this.cartoonEmail = cartoonEmail;

    this.print = function() {
        console.log('Cartoons Name: ' + this.cartoonName);
    }

}
// var cartoonCharacter = new Character;
var cartoonCharacter = new Character('Elete Baby', 'elete@test.com');
var animationCharacter = new Character('Powerpoint presentation', 'barbie@test.com');
var whiteboardCharacter = new Character('Doodly is the best paid software', 'many@email.com');

var All_Character = [cartoonCharacter, animationCharacter, whiteboardCharacter];


// console.log(cartoonCharacter.cartoonName);

// console.log(cartoonCharacter.cartoonEmail);
// console.log(cartoonCharacter); // this is an object

// console.log(All_Character);

// All_Character.forEach(function(All_Character) {
//     // console.log('Cartoons Email: ' + All_Character.cartoonEmail);

//    All_Character.print();

// });

// method 3 :

for (var props in cartoonCharacter) {
    console.log('The Cartoon Properties = ' + props);
}


// method 4: new method

function PokemonBook(pokemonName, pokemonAuthor, bookPrice) {
  this.pokemonName = pokemonName;
  this.pokemonAuthor = pokemonAuthor;
  this.bookPrice = bookPrice
}

var StoredBook = new PokemonBook('Example of new method', 'Williams Bonds', 44);
console.log(PokemonBook.constructor);

