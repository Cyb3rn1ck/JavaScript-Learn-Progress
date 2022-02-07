/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Nika";
console.log(firstName);
let PI = 3.14;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

// Bad Code
let job1 = "Programmer";
let job2 = "teacher";

console.log(myFirstJob);

*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 15);
// console.log(typeof "Nika");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 30;
// age = 31;

// // const birthYear = 1991;

// // const job;

// // Never use var
// var job = "Programmer";
// job = "Teacher";

// //Never do that
// lastName = "Gagua";
// console.log(lastName);

// Math operators
// const now = 2037;
// const ageNika = now - 1992;
// const ageDavit = now - 2015;
// console.log(ageNika, ageDavit);

// console.log(ageNika * 2, ageNika / 10, ageNika ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Nika";
// const lastName = "Gagua";
// console.log(firstName + " " + lastName);

// // Assigment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100;
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageNika > ageDavit); // >,<,<=, >=
// console.log(ageDavit >= 18);

// const isFullAge = ageDavit >= 18;

// console.log(now - 1992 > now - 2015);

// const now = 2037;
// const ageNika = now - 1992;
// const ageDavit = now - 2015;

// console.log(now - 1992 > now - 2015);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageNika + ageDavit) / 2;
// console.log(ageNika, ageDavit, averageAge);

//Challenge #1

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;

// const calcMarkBMI = markWeight / markHeight ** 2;
// console.log("Marks BMI is: " + Math.round(calcMarkBMI));

// const calcJohnBMI = johnWeight / johnHeight ** 2;
// console.log("John's BMI is: " + Math.round(calcJohnBMI));

// const compBMI = calcMarkBMI > calcJohnBMI;
// console.log(compBMI);

// const firstName = "Nika";
// const job = "Merchandiser";
// const birthYear = 1992;
// const year = 2037;

// const nika =
//   "I'm " +
//   firstName +
//   ", a " +
//   (year - birthYear) +
//   " year old " +
//   job +
//   ", i was born in " +
//   birthYear +
//   "!";
// console.log(nika);

// const nikaNew = `I'm ${firstName}, a ${
//   year - birthYear
// } year old ${job}, i was born in ${birthYear}!`;
// console.log(nikaNew);

// console.log(`This works fine to me`);

// console.log("first line \n\
// second line \n\
// third line ");

// console.log(`First line
// Second line
// Third line`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚙");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young. wait another ${yearsLeft} years 😇`);
// }

// const birthYear = 2101;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else if (birthYear <= 2100) {
//   century = 21;
// } else {
//   century = 22;
// }

// console.log(`This person was born in ${century} century`);

// Challenge #2

// Mark's and John's values
// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;

// // BMI formula
// const calcMarkBMI = markWeight / markHeight ** 2;
// const calcJohnBMI = johnWeight / johnHeight ** 2;

// // Round BMI of Both
// marksFixedBMI = calcMarkBMI.toFixed(1);
// johnsFixedBMI = calcJohnBMI.toFixed(1);

// // Which one's BMI is greater
// if (calcMarkBMI > calcJohnBMI) {
//   console.log(
//     `Mark's BMI (${marksFixedBMI}) is higher than John's (${johnsFixedBMI})`
//   );
// } else {
//   console.log(
//     `John's BMI (${johnsFixedBMI}) is higher than Mark's (${marksFixedBMI})`
//   );
// }

// Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 19, inputYear);
// console.log(inputYear + 18);

// console.log(Number("Nika"));
// console.log(typeof NaN);

// console.log(String(23), 3);

// // Type corection
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

//  falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean("Nika"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("OOPS! Height is undefined");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult (strict)");
// if (age == 18) console.log("You just became an adult (loose)");

// const favourite = Number(prompt("What's your favorite number?"));
// // console.log(favourite);

// if (favourite === 15) {
//   // '23' == 23
//   console.log("Cool! 15 is an amazing number! ");
// } else if (favourite === 10) {
//   console.log("10 is also a cool number");
// } else if (favourite === 11) {
//   console.log("11 is also good number!");
// } else {
//   console.log("Number is not 15 or 10 or 11");
// }

// if (favourite !== 15) console.log("Why not 15?");

// const hasDriversLicence = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

// const isTired = false; // C
// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

// Coding Challange #3

// // Team Dolphin
// const teamDolphinFirstScore = Number(prompt("Dolphin's score:"));
// const teamDolphinSecondScore = Number(prompt("Dolphin's score:"));
// const teamDolphinThirdScore = Number(prompt("Dolphin's score:"));

// // Average score calculator for Dolphin's
// const teamDolphinAvgScore =
//   (teamDolphinFirstScore + teamDolphinSecondScore + teamDolphinThirdScore) / 3;
// console.log(`Team Dolphin's avg score is: ${teamDolphinAvgScore.toFixed(0)}`);

// // Team Koala
// const teamKoalaFirstScore = Number(prompt("Koala's score:"));
// const teamKoalaSecondScore = Number(prompt("Koala's score:"));
// const teamKoalaThirdScore = Number(prompt("Koala's score:"));

// //  Average score calculator for Koala's
// const teamKoalaAvgScore =
//   (teamKoalaFirstScore + teamKoalaSecondScore + teamKoalaThirdScore) / 3;
// console.log(`Team Koala's avg score is: ${teamKoalaAvgScore.toFixed(0)}`);

// // Compare both team average to each other
// // If team Dolphin's won and it's > 100
// if (teamDolphinAvgScore > teamKoalaAvgScore && teamDolphinAvgScore >= 100) {
//   console.log(`CONGRATS🥳! Team Dolphin won!!!`);
//   // If its draw and it's >  100
// } else if (
//   teamDolphinAvgScore === teamKoalaAvgScore &&
//   teamDolphinAvgScore >= 100 &&
//   teamKoalaAvgScore >= 100
// ) {
//   console.log(`WOW🙀! It's a draw, go play again!`);
//   // If team Koala's won and it's >  100
// } else if (
//   teamDolphinAvgScore < teamKoalaAvgScore &&
//   teamKoalaAvgScore >= 100
// ) {
//   console.log(`CONGRATS🎉! Team Koala won!!!`);
//   // If some of them won, but their score is < 100
// } else {
//   console.log(`OH NO! 🙈 NO Team win the trophy`);
// }

// const day = "monday";

// switch (day) {
//   case "monday": // day === monday
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day!");
// }

// const age = 19;
// // age >= 18
// //   ? console.log("I like to drink wine 🍷")
// //   : console.log("I like to drink water 🚰");

// // const drink = age >= 18 ? "wine 🍷" : "water 🚰";
// // console.log(drink);

// // let drink2;
// // if (age >= 18) {
// //   drink2 = "wine 🍷";
// // } else {
// //   drink2 = "water 🚰";
// // }
// // console.log(drink2);

// // console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🚰"}`);

// console.log(
//   `${age > 18 ? "wine 🍷" : age === 18 ? "let's check your age" : "water 🚰"}`
// );

// Coding Challange #4

//Entering bill value
// const bill = Number(prompt("Enter Bill value:"));
// console.log(`Your Bill was: ${bill}$`);

// const tipLowBill = (bill * 15) / 100;
// const tipHighBill = (bill * 20) / 100;

// const result =
//   bill >= 50 && bill <= 300
//     ? `Your tip is ${tipLowBill}, and the total value is: ${bill + tipLowBill}$`
//     : `Your tip is ${tipHighBill}, and the total value is: ${
//         bill + tipHighBill
//       }$`;
// console.log(result);
