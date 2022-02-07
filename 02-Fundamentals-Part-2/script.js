// Activate strict mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "audio";
// const private = 534;
// const if = 23;

// FUNCTIONS

// function logger() {
//   console.log("Myname is Nika");
// }

// // Calling / Running / Or invoking function
// // it means same thing
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// //same as
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declarations and Expressions
// Function Declaration
// const age1 = calcAge1(1992);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// //Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1992);

// console.log(age1, age2);

// Arrow Function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} year later`;
// };

// console.log(yearsUntilRetirement(1992, "Nika"));
// console.log(yearsUntilRetirement(2015, "Davit"));

// Function calling in other function

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} year later`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1992, "Nika"));
// console.log(yearsUntilRetirement(1950, "Davit"));

// Coding Challange #1 (my example)
// Dolphin's average
// const avgDolphins = function (dolphins) {
//   return Math.round((85 + 54 + 41) / 3);
// };
// //Koala's average
// const avgKoalas = function (koalas) {
//   return Math.round((23 + 34 + 34) / 3);
// };

// // Calculate both team average for 3 game
// const calcAverage = (avgDolphins, avgKoalas) => {
//   return `Team Dolphin's avg score is: ${avgDolphins} and Team Koala's avg score is: ${avgKoalas}`;
// };
// console.log(calcAverage(avgDolphins(), avgKoalas()));

// // Checks the winner
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphin's win ${avgDolphins} vs. ${avgKoalas} 🎉`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koala's win ${avgKoalas} vs. ${avgDolphins} 🎉`;
//   } else {
//     return `There's no winner in this game!!!😨`;
//   }
// };
// console.log(checkWinner(avgDolphins(), avgKoalas()));

//Jonas example of solution

const calcAverage = (a, b, c) => Math.round((a + b + c) / 3);

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(
  `Team Dolphin's avg score is: ${scoreDolphins} and Team Koala's avg score is: ${scoreKoalas}`
);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win!!!🏆️ ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win!!!🏆️ ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins!!!`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(245, 100);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(
  `Team Dolphin's avg score is: ${scoreDolphins} and Team Koala's avg score is: ${scoreKoalas}`
);
checkWinner(scoreDolphins, scoreKoalas);
