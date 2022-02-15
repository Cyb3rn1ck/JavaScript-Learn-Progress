'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  if (birthYear >= 1981 && birthYear <= 1996) {
    const firstName = 'Nikoloz';
    var millenial = true;
    const str = `Oh, and you're a millenial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }

    const output = 'NEW OUTPUT!';

    console.log(millenial);
    console.log(output);
  }
  printAge();

  // console.log(add(2, 3));

  return age;
}

const firstName = 'Nika';
calcAge(1992);
