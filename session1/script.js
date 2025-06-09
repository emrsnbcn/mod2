console.log("Hello from external JS!");

// Single Line Comment
/* 
    multi
    line
    comment
*/

// JavaScript is a loosely type programming language

// VARIABLES - there are 3 ways to create variables
// var - it can be redeclare and be updated.
// let - you cannot redeclare but you can update the value.
// const - (constant) you cannot redeclare and also you cannot update the value

//hoisting - you are putting it at the top / global level

var tax;
console.log(tax);
var tax = 5;

//DATA TYPES

// PRIMITIVE DATA TYPES
//strings - may include alphanumeric characters it is enclosed by a single quite or double quote

let message = "Hello there";
console.log(message);

let friendName = "John";
console.log(message + " " + friendName);

//number / number - are used for computation and it should not enclosed in single or double quotes.

let total = 0;
let item1 = 200;
let item2 = 300;
total = item1 + item2;
console.log(item1 + item2);
console.log(total); //500

//But what happens if we add a string to a number / number to a string (type coercion)
console.log(1 + "2"); //12 or 3

console.log(1 + 1 + "2"); //4 or 112

//PEMDAS RULE
console.log(((5 + 8) * 4) / 2);

//boolean - represents true or false
// (>) greater than
// (<) less than

console.log(0 > 1); //false
console.log(5 < 2);
console.log(5 >= 5); //true

//undefined - a variable declare without a value;
let age;
console.log(age);

let smallestNumber = -Infinity;
console.log(-999999 < smallestNumber);
console.log(typeof smallestNumber);

//null - the value null represents the intentional absence of any variable or object.
let z = null;

// NON - PRIMITIVE DATA TYPES

let person = {
	name: "John Doe",
	age: 42,
	address: "Penang MY",
	"x522-z1my": "secret message",
	0: "this is just an egg",
};

console.log(person);
//There are 2 ways to access an object value.
// dot notation (.)
// square bracket notation
console.log(person.name);
console.log(person["name"]);

console.log(person["x522-z1my"]);
console.log(person["0"]);

//ARRAY
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length); //tells you how long the item is

// to always get the last value;
console.log(fruits[fruits.length - 3]);

console.log("=============================");
//PRIMITIVE DATA TYPES are immutable and it is pass by value

let a = 5;
let b = a;

a = 25;
console.log(b); //5

//non primitive data types are mutable and it is pass by reference.

let cars = ["tesla", "byd", "honda"];
console.log("Original Cars List:", cars);

let carsCopy = cars;
console.log("Cars Copy: ", carsCopy);

carsCopy[0] = "Proton";

console.log("==================");

console.log("Current cars copy: ", carsCopy);
console.log("Current orig cars : ", cars);

const stuff = ["table", "ladder", "chair"];
console.log(stuff);

stuff[0] = "tumbler";
console.log(stuff);

//OPERATORS

//assignment operator
let p = 10;

//additional assignment operator ( += )
p += 2;
//p = p  + 2

console.log(p); //12

let msg = "Hello";
msg += "World";
//msg = msg + "World"
console.log(msg);

//Subtraction assignment operator (-=)
p -= 3;
console.log(p); //9

//Multiplication assignemnt operator (*=)
p *= 4;
console.log(p); //36

//Division assignment operator (/=)
p /= 2;
console.log(p); //18

//Modulo assignment operator (%=) / remainder

p %= 3;
console.log(p); //0

/* EQUALITY OPERATOR ==
    -return true if both values are equal
    -if comparing numbers to a string. The number will be converted to a string.
    -if comparing boolean. It will be converted to a number if compared with a number 
        (0 - false) (1 - true)
*/
console.log("==============EQUALITY OPERATOR=============");

console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 == "20"); //false
console.log(1 == true); //true
console.log(0 == false); //true

console.log(
	"=================== STRICT EQUALITY OPERATOR====================="
);

/* STRICT EQUALITY === 
WILL  ONLY RETURN TRUE IF BOTH OPERANDS HAVE THE SAME DATA TYPE AND SAME VALUE.
*/

console.log(5 === "5"); //false

/* INEQUALITY OPERATOR != 'not equal' 
    if comparing something which is true it would be false.
*/

console.log(1 != 1); //false
console.log(5 != 20); //true

/*
STRICT INEQUALITY OPERATOR !== 'strictly not equal'
it will return true if both operands are strictly not equal (data type and value)
*/
console.log(1 !== 2); //true
console.log(1 !== 1); //false

//LOGICAL OPERATORS

// && AND OPERATOR both operands must be true then it returns else it will be false
let chocolate = true;
let vanilla = false;

// Can you buy me a chocolate ice cream AND a vanilla ice cream
console.log(chocolate && vanilla); //false

// || OR OPERATOR
//Can you buy me a chocolate ice cream OR a vanilla ice cream.
console.log(chocolate || vanilla); //true

// ! OPERATOR
let isAbsent = false;
console.log(!isAbsent); //true
