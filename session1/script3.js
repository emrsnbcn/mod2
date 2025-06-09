/*FOR LOOP

for(expression1, expression2, expression3) {
    //code to run
}
*/

//expression1 = starting point
//expression2 = condition
//expression3 = increment

for (let i = 0; i <= 5; i += 2) {
	console.log(i);
}

//while loop

/*
while(condition) {
    //code to execute if condition is true
}
*/

console.log("========================");

let x = 0;
while (x < 5) {
	console.log(x);
	x++;
}

console.log("==================");

while (false) {
	console.log("hello");
}

let fruits = ["apple", "mango", "banana"];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

/*
do {
    //code to run
}while()
    it will run if the condition is true;
    if the condition is false it will still run once.
*/
let y = 0;
do {
	console.log(y);
	y++;
} while (y < 5);

do {
	console.log("you will see me");
} while (false);

console.log("=================");

for (let i = 0; i < 10; i++) {
	if (i === 3) continue;
	if (i === 7) break;
	console.log(i);
}

//WHILE LOOP - IT ONLY STOPS IF THE CONDITION IS FALSE.
