// lexical this:


// const object = {
//     history: 'This is Lexical this method',
//     location: function() {
//         // console.log(this);
//         setTimeout(function() {
//             console.log(this);
//         }.bind(this), 1000);
//     }
// }

// object.location();


const object = {
    history: 'This is Lexical this method',
    location: function() {
        setTimeout(() => {
            console.log(this.history);
        }, 1000);
    }
}


const objectTwo = {
    history: 'This is Lexical this method.....',
    locations: function() {
        setTimeout(function() {
            console.log(this.history);
        }, 1000);
    }
}

objectTwo.locations();

object.location();

