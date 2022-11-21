'use strict';
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function (){
  // console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1992);
console.log(jonas);

// Prototypes
console.log(Person.prototype);
Person.prototype.caclAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.caclAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
 */
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

bmw.brake();
 */
// class expression
// const PersonCl = class {

// }

/* 
// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2047 - this.birthYear);
  }
}

const jessica = new PersonCl('jessica', 1994);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () { 
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
 */
/* 
const account = {
  owner: 'Jonas',
  movements: [200, 420, 120, 12],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
 */

// Object.create
/* 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1992;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
sarah.calcAge();
 */
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/* 
class CarES6 {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(sppedUS) {
    this.speed = sppedUS * 1.6;
  }
}

const ford = new CarES6(120, 'FORD');

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.break();
console.log(ford.speedUS);
ford.speedUS = 122;
console.log(ford.speedUS);
 */

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
 */

// Inheritance Between Classes - ES6 classes
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2047 - this.birthYear);
  }
}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always super first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'math');
console.log(martha);
martha.introduce();
martha.calcAge();
 */

/* 
// Inheritance Between Classes - Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.introduce();
jay.calcAge();
 */

// Public fields
// Private fields
// Public methods
// Private methods
/* 
class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields (instances - not in prototype)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  getPin() {
    return this.#pin;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(-140);
console.log(acc1);

// Chaining

acc1.deposit(300).deposit(304).withdraw(23).requestLoan(120).withdraw(100);
 */

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/* 
class CarCl {
  make;
  speed;

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} is charget to ${this.#charge}`);
    return this;
  };

  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
    );
    return this;
  };
}

const tesla = new EVCl('Tesla', 100, 100);
console.log(tesla);
const audi = new CarCl('Audo', 50);

tesla.accelerate().chargeBattery(120);
 */
