'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// ES6 Enhanced Object Literals
  const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun']
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  
  orderDelivery({starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...
    otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },

    openingHours,
  };

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again!']
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log((question.get('question')));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
};
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

//  const rest = new Map();
//  rest.set('name', 'Classico Italiano');
//  rest.set(1, 'Firenze, Italy');
//  console.log(rest.set(2, 'Lisbon'));

//  rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//  .set('open', 11)
//  .set('close', 23)
//  .set(true, 'We are open')
//  .set(false, 'We are closed')

//  console.log(rest.get('name'));
//  console.log(rest.get(true));
//  console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);

// return undefined bc array is not the same object in the heap
// console.log(rest.get([1, 2]));
// console.log(rest.get(arr));

  // const ordersSet = new Set ([
  //   'Pasta',
  //   'Pizza',
  //   'Pizza',
  //   'Risotto',
  //   'Pasta',
  //   'Pizza',
  // ]);
  // duplicates are shown in the set, so it will show a set of three in this case (unique elements)
  // console.log(ordersSet);

  // console.log(new Set('Paul'));

  // to get the size of the set
  // console.log(ordersSet.size);

  // check of set contains item; BOOLEAN
  // console.log(ordersSet.has('Bread'));

  // add new element to set
  // ordersSet.add('Garlic Bread');
  // ordersSet.add('Garlic Bread');

  // delete all elements
  // ordersSet.clear();

  // delete elements
  // ordersSet.delete('Risotto');
  // console.log(ordersSet);

  // for (const order of ordersSet)
  // console.log(order);

// Main use case of sets is to remove duplicate values of arrays
// Example
  // const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
  // use spread operator on any iterable to create array from set
  // const staffUnique = [...new Set(staff)];
  // console.log(staffUnique);
  // console.log(new Set(['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter']).size);

  // console.log(new Set('paulsong').size);

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr+= `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// Optional Chaining
  // if (restaurant.openingHours && restaurant.openingHours.mon) 
  //   console.log(restaurant.openingHours.mon.open);


  // With optional chaining
  // only if property before ? exists, the console will show property
  // console.log(restaurant.openingHours.mon?.open);
  // console.log(restaurant.openingHours?.mon?.open);

  // Example
  // const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
  // for (const day of days) {
  //   console.log(day);
  //   const open = restaurant.openingHours[day]?.open ?? 'closed';
  //   console.log(`On ${day}, we open at ${open}`);
  // }

  // Methods
  // console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
  // console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

  // Arrays
  // const users = [{
  //   name: 'Paul',
  //   email: 'hello@paul.io',
  // }];

  // console.log(users[0]?.name ?? 'User array empty');
  // if (users.length > 0) console.log(users[0].name);
  // else console.log('User Array empty');


// Looping Arrays: for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());


// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// rest1.owner =  rest1.owner && '<ANONYMOUS>';
// rest2.owner =  rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 or '');
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect)


// console.log('--- OR ---');
// Usy ANY data type, return ANY data type, short circuiting
// returns the first truthy value or last value if all are falsy
// console.log(3 || 'Paul');
// console.log('' || 'Paul');
// console.log(true || 0);
// console.log(undefined || null);

// logs Hello bc it is the first truthy value
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// returns the first falsy value or last if all are falsy
// console.log('---AND---');
// console.log(0 && 'Paul');
// console.log(7 && 'Paul');
// console.log( 'Hello' && 23 && null && 'Paul');

// Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('pepperoni', 'beef'); 
// }
// restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'beef');



// SPREAD because on RIGHT side of =
// used to write values separated by commas
// const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
// used to write variable names separated by commas
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, ...others);

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('pepperoni', 'beef', 'bacon', 'seasoning');
// restaurant.orderPizza('pepperoni');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables are arrays, strings, maps, set; NOT Objects
// const str = 'Paul';
// const letters = [...str, , 's'];
// console.log(letters);

// Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ]
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ... restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// Destructuring Objects
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// useful if not hardcoding data
// const {
//   menu = [],
//   starterMenu: starters = []
// } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// }; 

// need to wrap destructuring assignment in parentheses to avoid unexpected token error
// ({a, b} = obj);
// console.log(a, b);

// // Nested Objects
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c); 


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary; 
// secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Return two values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

