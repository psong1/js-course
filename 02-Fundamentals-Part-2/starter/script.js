// LECTURE: Functions
// const describeCountry = (country, population, capitalCity) => {
//     return `${country} has ${population} and its capital city is ${capitalCity}.`;
// };
// console.log(describeCountry('United States', '300 billion people', 'Washington DC'));

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
};
let unitedStatesPop = percentageOfWorld1(300000000);
console.log(unitedStatesPop);

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
const describePopulation = (country, population) => {
    let unitedStatesPop = percentageOfWorld1(300000000);
    return `${country} has ${population} people, which is about ${unitedStatesPop}% of the world.`;
};
console.log(describePopulation('United States', 300000000));
