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

// const calcAverage = (a, b, c) => Math.round((a + b + c) / 3);

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(
//   `Team Dolphin's avg score is: ${scoreDolphins} and Team Koala's avg score is: ${scoreKoalas}`
// );

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win!!!🏆️ ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win!!!🏆️ ${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log(`No team wins!!!`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(245, 100);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(
//   `Team Dolphin's avg score is: ${scoreDolphins} and Team Koala's avg score is: ${scoreKoalas}`
// );
// checkWinner(scoreDolphins, scoreKoalas);

// Introduction Arrays

// const friend1 = "Giorgi";
// const friend2 = "Levan";
// const friend3 = "Davit";

// const friends = ["Giorgi", "Levan", "Davit"];
// console.log(friends);

// const y = new Array(1992, 1970, 2015, 2017);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Giga";
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const firstName = "Nika";
// const Nika = [firstName, "Gagua", 2037 - 1992, "teacher", friends];
// console.log(Nika);
// console.log(Nika.length);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = new Array(1992, 1970, 2015, 2017, 2000);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// Basic Arrays Operations (Methods)

// Add Elements to the end
// const friends = ["Giorgi", "Levan", "Davit"];
// const newLenght = friends.push("Giga");
// console.log(friends);
// console.log(newLenght);
// // Add Elements to the begining
// friends.unshift("Natia");
// console.log(friends);
// // Remove the last Elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Remove first Element
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Levan"));
// console.log(friends.indexOf("Natia"));

// friends.push(23);
// console.log(friends.includes("Levan"));
// console.log(friends.includes("Natia"));
// console.log(friends.includes(23));

// if (friends.includes("Levan")) {
//   console.log(`You have a friend called ${friends[1]}`);
// } else {
//   console.log(`You don't have that friend ;(`);
// }

// Coding Challange #2

// function that takes any bill value as an input and returns the correspunding tip
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     const inRangeTip = bill * 0.15;
//     // return `Your Bill is: ${bill}$, and your tip is: ${inRangeTip}$`;
//     return inRangeTip;
//   } else {
//     const otherTip = bill * 0.2;
//     // return `Your Bill is: ${bill}$, and your tip is: ${otherTip}$`;
//     return otherTip;
//   }
// };

// // bills Array

// const bills = [125, 555, 44];
// console.log(`Your bill values are: ${bills}`);

// // tips Array

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(`Your tips for each values are: ${tips}`);

// // total Array

// const total = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[bills.length - 1] + tips[tips.length - 1],
// ];

// console.log(`Final bill for each values are: ${total}`);

// Introduction to Objects
// const nikaArray = [
//   "Nika",
//   "Gagua",
//   2037 - 1992,
//   "merchandiser",
//   ["Giorgi", "Levani", "Daviti"],
// ];

// const nika = {
//   firstName: "Nika",
//   lastName: "Gagua",
//   age: 2037 - 1992,
//   job: "Merchandiser",
//   friends: ["Giorgi", "Levani", "Daviti"],
// };

// console.log(nika);
// console.log(nika.lastName);
// console.log(nika["firstName"]);

// const nameKey = "Name";
// console.log(nika["first" + nameKey]);
// console.log(nika["last" + nameKey]);

// console.log(nika.'last' + nameKey);

// const insterestedIn = prompt(
//   `What do you want to know about Nika? Choose between firstName, lastName, age, job, and friends`
// );

// if (nika[insterestedIn]) {
//   console.log(nika[insterestedIn]);
// } else {
//   console.log(
//     "Wrong Choice! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// nika.location = "Rustavi";
// nika["nickName"] = "Cybern1ck";
// console.log(nika);

// Challange
// "Nika has 3 friends, and his best friend is called Giorgi"

// console.log(
//   `${nika.firstName} has ${nika.friends.length} friends: ${nika.friends}, and his best friend is called ${nika.friends[0]}`
// );

// Object Methods

// const nika = {
//   firstName: "Nika",
//   lastName: "Gagua",
//   birthYear: 1992,
//   job: "Merchandiser",
//   friends: ["Giorgi", "Levani", "Daviti"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(nika.calcAge());

// console.log(nika.age);
// console.log(nika.age);
// console.log(nika.age);

// // Challange
// // "Nika is a 45-year old merchendiser, and he has a driver's license"

// console.log(nika.getSummary());

// Coding Challange #3

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.firstName} ${john.lastName}'s BMI (${john.bmi.toFixed(
//       1
//     )}) is higher than Mark's (${mark.bmi.toFixed(1)})!`
//   );
// } else {
//   console.log(
//     `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi.toFixed(
//       1
//     )}) is higher than John's (${john.bmi.toFixed(1)})!`
//   );
// }

// Iteration: The for Loop

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// Looping Arrays
// const nika = [
//   "Nika",
//   "Gagua",
//   2037 - 1992,
//   "merchandiser",
//   ["Giorgi", "Levani", "Daviti"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < nika.length; i++) {
//   // Reading from jonas array
//   console.log(nika[i], typeof nika[i]);

//   // filling types array
//   // types[i] = typeof nika[i];
//   types.push(typeof nika[i]);
// }

// console.log(types);

// const years = [1991, 1992, 1993, 1994, 1995];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// Breaking and Continuing

// console.log(`--- ONLY STRINGS---`);
// for (let i = 0; i < nika.length; i++) {
//   if (typeof nika[i] !== "string") continue;
//   console.log(nika[i], typeof nika[i]);
// }

// console.log(`--- BREAK WITH NUMBER---`);
// for (let i = 0; i < nika.length; i++) {
//   if (typeof nika[i] === "number") break;
//   console.log(nika[i], typeof nika[i]);
// }

// Loop Backwards and Loop in Loop

// const nika = [
//   "Nika",
//   "Gagua",
//   2037 - 1992,
//   "merchandiser",
//   ["Giorgi", "Levani", "Daviti"],
// ];

// // 0, 1, ..., 4
// // 4,3, .., 0

// for (let i = nika.length - 1; i >= 0; i--) {
//   console.log(i, nika[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------------ Starting exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise} Lifting wieght repetition ${rep}🏋️‍♀️`);
//   }
// }

// While Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`Loop is about to end, becouse it's ${dice}`);
//   }
// }

// Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// console.log(`Bill values are : ${bills}`);

// const tips = [];
// const total = [];

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(tips[i] + bills[i]);
// }

// console.log(`Tip values are : ${tips}`);
// console.log(`Total values are : ${total}`);

// const calcAverage = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(total));
// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
