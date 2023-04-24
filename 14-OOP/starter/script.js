'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never make methods inside constructor function
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear);
//     // }
// };

// Person.hey = function() {
//     console.log('Hey there!');
//     console.log(this);
// }

// const paul = new Person('Paul', 1995);
// console.log(paul);

// // 1. New empty object is created
// // 2. function is called, this = {} (this points to 1.)
// // 3. {} linked prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);


// console.log(paul instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function() {
//     console.log(2023 - this.birthYear);
// };

// paul.calcAge();

// console.log(paul.__proto__);
// console.log(paul.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(paul));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo sapien';
// console.log(paul.species);

// console.log(paul.hasOwnProperty('firstName'));
// console.log(paul.hasOwnProperty('species'));

// console.log(paul.__proto__);
// // Object.prototype (top of the prototype chain)
// console.log(paul.__proto__.__proto__);
// console.log(paul.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);


// ES6 CLASSES
// class expression
// const PersonCl = class {}

// class declaration
const curYear = new Date().getFullYear();

// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance methods
//     // Methods will be added to the .prototype property
//     calcAge() {
//         console.log(curYear - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return curYear - this.birthYear;
//     }

//     // Set a property that already exists (from the constructor)
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name.`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static method
//     static hey() {
//         console.log('Hey there!');
//         console.log(this);
//     }
// };

// const paul = new PersonCl('Paul Song', 1995);
// console.log(paul);
// paul.calcAge();
// console.log(paul.age);

// console.log(paul.__proto__ === PersonCl.prototype);
// // PersonCl.prototype.greet = function() {
// //     console.log(`Hey ${this.firstName}`);
// // };

// paul.greet();

// // 1. Classes are not hoisted
// // 2. Classes are first-class citizens -- can pass them into functions and also return them from functions
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


// // GETTERS AND SETTERS
// const account = {
//     owner: 'Paul',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements
//             .slice(-1)
//             .pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//     calcAge() {
//         console.log(curYear - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// console.log(sarah);


// INHERITANCE
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(curYear - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I am studying ${this.course}.`)
}

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);