// return statements


// method 1
function name(fullName, surName, identity) {
    var output;

    if (identity === 'others') {
        // var output = 'Not prefer to say, ' + fullName + ' ' + surName;
        output = 'Not prefer to say, ' + fullName + ' ' + surName;
        // return output;
    } else if (identity === 'women') {
        // var output = 'Ms, ' + fullName + ' ' + surName;
        output = 'Ms, ' + fullName + ' ' + surName;
        // return output;
    }
    return output;
}

var result = name('Barbie', 'Doll','women');
console.log(result);

// method 2

function exampleOne () {
    return {
        fullName: 'Barbie Doll',
        softSkill: ['Critical_Thinking', 'Problem_Solving'],
     print: function() {
    console.log(this.fullName, this.softSkill);
  }
 }
}


var obj = exampleOne();

obj.print();


