'use strict';

//DEFAULT PARAMETERS
// const bookings = [];

// ES6 defines default in parameters
// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
 
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// PASSING ARGUMENTS: VALUES VS REFERENCES
// const flight = 'LH234';
// const paul = {
//     name: 'Paul Song',
//     passport: 1234567890
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 1234567890) {
//         alert('Check in')
//     } else {
//         alert('Wrong passport');
//     }
// }

// checkIn(flight, paul);
// console.log(flight);
// console.log(paul);

// Same as doing
// const flightNum = flight;
// const passenger = paul;

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
// }

// newPassport(paul);
// checkIn(flight, paul);

// FIRST CLASS FUNCTIONS
// Javascript treats functions as first-class citizens -- functions are simply values
// Functions are just another "type" of object

// HIGHER ORDER FUNCTION
// A function that receives another function as an argument, that returns a new function, or both
// This is only possible bc of first-class functions


// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
//   };

// Higher order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function() {
//     console.log('wave');
// };

// document.body.addEventListener('click', high5);

// FUNCTIONS RETURNING FUNCTIONS
// const greet = greeting =>  {
//     return name => {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Paul');
// greeterHey('Jonas');

// greet('Hello')('Paul');

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// lufthansa.book(239, 'Paul Song');
// lufthansa.book(213, 'Cortez Sherman');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// // DOES NOT WORK
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 583, 'Paul Song');

// // Apply method
// const flightData= [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// // Same as the apply (the preferred method)
// book.call(swiss, ...flightData);

// // THE BIND METHOD
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams')

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Paul Song');
// bookEW23('Martha Cooper');

// // W/ Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate= function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));


// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// const runOnce = function() {
//     console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function() {
//     console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();


// CLOSURES
// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();

// Reassigning f function
h();
f();
console.dir(f);

// Example 2 
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3)

