// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [-3,-2,-6,-1,'error',9,13,17,15,14,9,5]

// 1) Understanding the problem
// - What is temp amplitude? Answer:  difference between highest and lowest temp
// - How to compute max and min temperatures? 
// =What's a sensor error? and what to do? 

// 2) Breaking up into sub-problems
// - How to ignore errors? 
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i ++){
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max,min);
//   return max - min
// }

// const amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

// Problem 2 :
// Function should now recieve 2 arrays of temperature

// Understand the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge arrays

// Breaking up into sub-problem
// Merge arrays

// const calcTempAmplitudeNew = function (temp1,temp2) {

//   const temps = temp1.concat(temp2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i ++){
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max,min);
//   return max - min
// }

// const amplitudeNew = calcTempAmplitudeNew([3,5,7],[2,4,6]);

// console.log(amplitudeNew);

// Debugging with the Console and Breakpoints

// const measureKelvin = function (){
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     // C) FIx
//     value: Number(prompt('Degrees celcius:'))
//   }
//   // B) Find bug
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const Kelvin = measurement.value + 273;
//   return Kelvin
// }
// // A) Identify bug
// console.log(measureKelvin());

// Using Debugger
// const calcTempAmplitudebug = function (temp1,temp2) {

//     const temps = temp1.concat(temp2);
//     console.log(temps);
  
//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < temps.length; i ++){
//       const curTemp = temps[i];
//       if (typeof curTemp !== 'number') continue;
  
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
//     console.log(max,min);
//     return max - min
//   }
  
//   const amplitudebug = calcTempAmplitudebug([3,5,7],[2,4,6]);
//   // A) Identify
//   console.log(amplitudebug);


// Coding Challange #1 

// 1) Array transformed the problem
// 2) What is the X days? Answer: index + 1

// sub-problems
// Transform array into string
// Transform each element t ostring with C
// - Strgins need to contain day (index +1 )
// add ... between elements and start and end of string

  // const testData1 = [17,21,23];
  // const testData2 = [12,5,-5,0,4];




  // const printForecast = function (arr) {
  //   let str = '';
  //   for (let i=0; i < arr.length; i++ ){
  //     str += `${arr[i]}°C in ${i + 1} days ... `;
  //   }
  //   console.log('...' +' '+ str);
  // }

  // printForecast(testData1);
