// JavaScript identifier naming rules with examples

// 1) Must start with a letter, underscore (_), or dollar sign ($)
var name = 'Alice';         // valid: starts with a letter
var _name = 'Bob';          // valid: starts with underscore
var $name = 'Carol';        // valid: starts with dollar sign

// 2) After the first character, digits are allowed
var name1 = 1;              // valid: digits after the first character
var _name2 = 2;             // valid: underscore followed by digits
var $name3 = 3;             // valid: dollar sign followed by digits

// 3) Can contain letters, digits, underscores, and dollar signs only
var first_name = 'John';    // valid: underscore allowed in body
var price$ = 99.99;         // valid: dollar sign allowed in body
var count_1$ = 5;           // valid: letters, digits, underscore, dollar sign

// 4) Identifiers are case-sensitive
var data = 10;
var Data = 20;
console.log(data, Data);   // valid: separate identifiers

// 5) Cannot use reserved keywords as identifiers
// var return = 10;        // invalid: reserved keyword
// var class = 'X';        // invalid: reserved keyword

// 6) Cannot start with a digit
// var 1name = 'Alice';    // invalid: starts with a number

// 7) Cannot contain spaces or hyphens
// var first name = 'Alice'; // invalid: spaces not allowed
// var first-name = 'Alice'; // invalid: hyphens not allowed

// 8) Cannot contain special characters other than _ and $
// var name@ = 'Alice';    // invalid: @ not allowed
// var name! = 'Alice';    // invalid: ! not allowed

console.log(name, _name, $name, name1, first_name, price$);
