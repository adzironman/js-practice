'use strict';

//scoping
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age} old, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Adrian';
calcAge(1992);
*/

//hoisting and tdz
//variables
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Adrian';
let job = 'programmer';
const year = 1992;
*/

//functions
/*
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

//this keyword
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1992);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1992);
*/
/*
const jona = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jona.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jona.calcAge;
matilda.calcAge();
*/
/*
const jona = {
  firstName: 'Jona',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year == 1981 && this.year < +1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hej, ${this.firstName}`),
};

jona.greet();
jona.calcAge();
*/

/*
//object references
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
*/
