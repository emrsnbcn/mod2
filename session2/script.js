// FUNCTION AND SCOPE

//the parenthesis on the function declaration is what we call 'parameter/s'

//the parenthesis on the function call is what we call the argument/s
function sayHello(name, age) {
	console.log("Hello! " + name + " and my age is " + age);
}

sayHello(42, "Jane");

function add(a, b) {
	return a + b;
}

let result = add(3, 4);
console.log(result);

let result2 = add(7, 45);
console.log(result2);

// FUNCTION EXPRESSIONS
const multiply = function (a, b) {
	return a * b;
};

let result3 = multiply(4, 5);
console.log(result3);

//SCOPE DETERMINES WHERE VARIABLES ARE ACCESSIBLE

let globalVar = "I am global";

function testScope() {
	let localVar = "I am local";
	console.log(globalVar);
	console.log(localVar);
}

testScope();

function doubled(num) {
	return num * 2;
}

console.log(doubled(2)); //4
console.log(doubled(6)); //12
console.log(doubled(7)); //14

//1,3,5, .... - ODD NUMBERS
//2,4,6, .... - EVEN NUMBERS
// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

let isEven = (num) => {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(isEven(4)); //true
console.log(isEven(5)); //false

// const subtract = function (a, b) {
// 	return a - b;
// };

// const subtract = (a, b) =>  a - b;

// console.log(subtract(5, 1));

let greet = (name) => console.log("Hello, " + name + "!");

let printAge = (name, age) => console.log(name + " is " + age + " years old.");
