// Regular Expression:

// It help to find patterns within a string
// validate user input
// search inside text

const Matches = 'xYZ'.match(/[B-Z]/g);
console.log(Matches);
// output : (2) ["Y", "Z"]
const index = 'xYZ'.search(/[B-Z]/);
console.log(index);
// output: 1

const replaced = 'xYZ'.replace(/x/, 'X');
console.log(replaced);
// output: XYZ //

// \w matches any word character which is alphanumeric and underscore.

// \d matches any digit character which is (0-9)
// \s matches any whitespace character which is spaces, tabs & line breaks.
// \W matches any character which is not a word character including alphanumeric and underscore.

// \D matches any character which is not a digit character(0-9)
// \S matches any character which is not a whitespace character including spaces, tabs & line breaks.

// \t helps to match escapes character which is a TAB character char code 9.
// \n helps to match new line feed character with char code 10.
// . (dot) matches any character which is except line breaks. It is also called as period.

// [abd] // [a-z] // [a-zA-G] // [a-zA-Gj-lJ-L] ---> matches any Character in a set


// [^abc] this is a negated set which means it does not match with any character in a set.

// ? this indicates zero and one occurrences
// * this indicates zero and multiple occurrences

// + this indicates one and multiple occurrences

// {2} / {n} this actually preceding the item which is matched with exactly n times.

// {min, max} this indicates preceding item which is matched at least min times, but maximum max times.

// ESCAPE CHARACTER ----> colou?rs\? and use the string

// ANCHOR CHARACTER ----> ^The ---> this matches the beginning string
// $ matches the end position using the string, Example, ( he he!$)

// ^[0-4]

// !$

// m is a multi line flag

// ^i

// Method://

// const text = '#2A2A2A';
const textOne = '+88-01833446668';

// const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const regex = /(\+88)?-?01[1-9]\d{8}/g;

const matchOne = text.match(regex);
const searchOne = text.search(regex);
const replaceOne = text.replace(regex, '#000000');
const testingOne = regex.test(regex);


console.log(matchOne, searchOne, replaceOne, testingOne);

// method 2
// const textOne = '+88-01833446668';
// const textTwo = '01833446668';
// const textThree = '+8801833446668';
// const regexOne = /(\+88)?-?01[1-9]\d{8}/g;

// const matchTwo = text.match(regex);
// const searchTwo= text.search(regex);
// const replaceTwo= text.replace(regex, 'phonenumber');
// const testingTwo = regex.test(regex);


// console.log(matchTwo, searchTwo, replaceTwo, testingTwo);
