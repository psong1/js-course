// const checkDogs = function(dogsJulia, dogsKate) {
//     dogsJulia.forEach(function(age, i) {
//         if (age > 3) {
//             console.log(`Dog number ${i + 1} is an adult, and ${age} years old.`)
//         } else {
//             console.log(`Dog number ${i + 1} is still a puppy.`);
//         }
//     });

//     dogsKate.forEach(function(age, i) {
//         if (age > 3) {
//             console.log(`Dog number ${i + 1} is an adult, and ${age} years old.`)
//         } else {
//             console.log(`Dog number ${i + 1} is still a puppy.`);
//         }
//     });

    // can concat both arrays for just 1 forEach loop
// };

// const julia1 = [3, 5, 2, 12, 7];
// const kate1 = [4, 1, 15, 8, 3];

// const correctJulia1 = julia1.slice(1, -2);
// checkDogs(correctJulia1, kate1);

// console.log('----- NEW DATA SET -----');

// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// const correctJulia2 = julia2.slice(1, -2);
// checkDogs(correctJulia2, kate2);


// Challenge 2
// const calcAverageHumanAge = function(ages) {
//     // const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//     // const adults = humanAges.filter(age => age >= 18);
//     // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//     // return avg;

// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1);
// console.log(avg2);


// Challenge 3
// const calcAverageHumanAge = ages => 
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// Challenge 4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    { weight: 8, curFood: 200, owners: ['Matilda']},
    { weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']},
];

// 1.
// relative to curFood
const recommendedFood = dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2. 
const sarah = dogs
    .find(dog => dog.owners.includes('Sarah'));
console.log(sarah);
const dogSarah = sarah.curFood > sarah.recFood ? console.log(`Sarah's dog is overeating`) : console.log(`Within RDA`);

// 3. 
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap((dog, i, arr) => {
        // console.log(arr);
        return dog.owners;
    });
console.log(`${ownersEatTooMuch.join(', ')}'s dogs eat too much!`);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap((dog, i, arr) => {
        // console.log(arr);
        return dog.owners;
});
console.log(`${ownersEatTooLittle.join(', ')}'s dogs eat too little!`);

// 4.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 5. 
const checkEatingOk = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOk));

// 6. 
console.log(dogs.filter(checkEatingOk));

// 7. 
const dogsSorted = dogs   
    .slice()
    .sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);