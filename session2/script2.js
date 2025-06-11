let fruits = ["Apple", "mango", "banana"];

console.log(fruits[0]);
console.log(fruits.length); //length of the fruits array
console.log(fruits[0].length); //length of the string of the first item

/*Common array methods
push()  add to end
pop()   remove from end
shift() remove from start
unshift() add at start
*/

console.log(fruits);
fruits.push("papaya");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);
//FOR i LOOP
// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i], i);
// }

// foreach is a method for an array to iterate on the given list
// fruits.forEach(function (fruit, i) {
// 	console.log(fruit);
// });

//for of loop
// for (let paper of fruits) {
// 	console.log(paper);
// }

// // filter method
// let newFruits = fruits.filter(function (fruit) {
// 	return fruit.length >= 5;
// });

// filter method using arrow functions
let newFruits = fruits.filter((fruit) => fruit.length >= 5);

console.log(newFruits);

let post = {
	title: "Hello",
	tags: ["intro", "welcome"],
	author: {
		name: "Howie",
		age: 30,
	},
};

console.log(post.author.name);
console.log(post.tags[1]); // welcome

/*
    Mini Activity
    1. Create an array of 5 of your favorite movies.

    2. Log the first and last movie.

    3. Use push() to add one, and pop() to remove one.

    4. Create an object profile with your name, age, and an array of 3 hobbies.

    5. Log your second hobby.
*/

let favoriteMovies = [
	"In Time",
	"Harry Potter",
	"The Avengers",
	"IT",
	"Batman",
];
console.log(favoriteMovies[0]); //first movie
console.log(favoriteMovies[favoriteMovies.length - 1]); //last movie

favoriteMovies.push("Ant Man"); //add movie at the end
favoriteMovies.pop();

let profile = {
	name: "Emerson",
	age: 30,
	hobbies: ["Basketball", "Boxing", "Golf"],
};

let html = {
	head: {
		title: "My First Website",
	},
	body: {
		h1: "Hello",
		p: "MEssage",
	},
};

console.log(profile.hobbies[1]);
