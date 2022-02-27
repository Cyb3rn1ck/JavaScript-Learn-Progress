'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   if (birthYear >= 1981 && birthYear <= 1996) {
//     const firstName = 'Nikoloz';
//     var millenial = true;
//     const str = `Oh, and you're a millenial, ${firstName}`;
//     console.log(str);

//     function add(a, b) {
//       return a + b;
//     }

//     const output = 'NEW OUTPUT!';

//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   // console.log(add(2, 3));

//   return age;
// }

// const firstName = 'Nika';
// calcAge(1992);

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Nika';
// let job = 'Merchandiser';
// const year = 1991;

// // Functions

// console.log(addDecl(2, 3));
// console.log(addExp(4, 5));
// console.log(addArrow(6, 7));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example

// console.log(numProducts);
// var numProducts = 10;
// if (!numProducts) deleteShoppingCart();

// function deleteShoppingCart() {
//   console.log('All Products Deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.x);
// console.log(z === window.x);

// This keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };

// calcAge(1992);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2015);

// const nika = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// nika.calcAge();

// const gvanca = {
//   year: 2017,
// };

// gvanca.calcAge = nika.calcAge;
// console.log(gvanca);
// gvanca.calcAge();

// const f = nika.calcAge;
// f();

// Primitives

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Nika',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends', friend);
// console.log('Me', me);

// Primitive types
// let lastName = 'Chaava';
// let oldLastName = lastName;
// lastName = 'Gagua';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
