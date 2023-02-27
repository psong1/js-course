// LECTURE: Functions
// const describeCountry = (country, population, capitalCity) => {
//     return `${country} has ${population} and its capital city is ${capitalCity}.`;
// };
// console.log(describeCountry('United States', '300 billion people', 'Washington DC'));

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
};
// let unitedStatesPop = percentageOfWorld1(300000000);
// console.log(unitedStatesPop);

// const percentageofWorld2 = function(population) {
//     return population / 7900 * 100
// };
// let mexicoPop = percentageofWorld2(20000000);
// console.log(mexicoPop);

// LECTURE: Arrow Functions
// const percentageOfWorld3 = population => {
//     return population / 7900 * 100;
// };

// LECTURE: Function Calling Other Functions
// * function is declared prior w/ no argument
// const describePopulation = (country, population) => {
//     let unitedStatesPop = percentageOfWorld1(300000000);
//     return `${country} has ${population} people, which is about ${unitedStatesPop}% of the world.`;
// };
// console.log(describePopulation('United States', 300000000));


// CODING CHALLENGE 1
// * REVIEW *
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// let scoreDolphins2 = calcAverage(85, 54, 41);
// let scoreKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     }
//     else {
//         console.log('No one wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins2, scoreKoalas2);

// LECTURE: Intro to Arrays
// const populations = [70000000, 222000000, 22800000, 4550000];
// console.log(populations.length === 4);
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
// const neighbors = ['Mexico', 'Canada'];
// neighbors.push('Utopia');
// neighbors.pop();
// if (neighbors.includes !== 'Germany') {
//     console.log('Probably not a central European country.');
// };
// neighbors[1] = 'Panama';
// console.log(neighbors);

// CODING CHALLENGE #2
// const calcTip = bill => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     }
//     else {
//         return bill * 0.20;
//     };
// };
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
// console.log(tips);
// console.log(total);

// LECTURE: Intro to Objects
// const myCountry = {
//     country: 'United States of America',
//     capital: 'Washington D.C.',
//     language: 'English',
//     population: 332000000,
//     neighbors: ['Mexico', 'Canada'],
//     describe: function() 
//         {console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`)},
//     checkIsland: function() {
//         this.isIsland = this.neighbors.length === 0 ? true : false;
//     }
// };
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

// console.log(myCountry.population + 2000000);
// console.log(myCountry['population'] - 2000000);
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// CODING CHALLENGE #3
// const player1 = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     },
//     };
// const player2 = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
// },
// };
// player1.calcBMI();
// player2.calcBMI();
// console.log(player1.BMI);
// if (player1.BMI > player2.BMI) {
//     console.log(`${player1.fullName} has a higher BMI (${player1.BMI}) than ${player2.fullName} (${player2.BMI})`);
// }
// else {
//     console.log(`${player2.fullName} has a higher BMI (${player2.BMI}) than ${player1.fullName} (${player1.BMI})`);         
// };

