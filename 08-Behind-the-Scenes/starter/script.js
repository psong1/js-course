'use strict';

// Scoping in Practice
// function calcAge(birthYear) {
//     const age = 2023 - birthYear;
    
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
             // creating NEW variable wiht same name as outer scope's variable
            // const firstName = 'Dave';
            // will log Dave because this first name is in this specific scope
            // const str = `Oh, and you're a millenial, ${firstName}`;
            // console.log(str);

            // function add(a, b) {
            //     return a + b;
            // }
            
           // Reassigning outer scope's variable
        //     output = 'NEW OUTPUT!'
        // }
        // able to reference this because var is FUNCTION scoped, not BLOCK scoped
//         console.log(millenial);
//         console.log(output);
  
//     }

//     printAge();

//     return age;
// };

// const firstName = 'Paul';
// calcAge(1995);


// Hoisting and The TDZ in Practice
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Paul';
// let job = 'Software Developer';
// const year = 1995;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));


// function addDecl(a, b) {
//     return a + b;
// };

// var addExpr = function(a,b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example 
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }


// The this Keyoword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2023 - birthYear);
//     console.log(this);
// };
// calcAge(1995);

// const calcAgeArrow = birthYear => {
//     console.log(2023 - birthYear);
    // console.log(this);
// };
// calcAgeArrow(1995);

// const me = {
//     year: 1995,
//     calcAge: function() {
//         console.log(2023 - this.year);
//     },
// };
// me.calcAge();

// const dave = {
//     year: 1996,
// };

// dave.calcAge = me.calcAge;
// dave.calcAge();

// Regular Functions vs. Arrow Functions
// const me = {
//     firstName: 'Paul',
//     year: 1995,
//     calcAge: function() {
//         console.log(this);
//         console.log(2023 - this.year);
        
        // Solution 1
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        // Solution 2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();

//     },

//     greet: function() {
//         console.log(`Hey ${this.firstName}`)
//     },
// };
// me.greet();
// me.calcAge();

// const addExpr = function (a,b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2,5);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5);

// Primitives vs. Objects (Primitive vs. Reference Types)
// let age = 27;
// let oldAge = age;
// age = 28;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Paul',
//     age: 27,
// };

// const friend = me;
// friend.age = 29;
// console.log(friend.age);


// Primitives vs. Objects in Practice
let lastName = 'Song';
let oldLastName = lastName;
lastName = 'Son';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage', marriedJessica);

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy);