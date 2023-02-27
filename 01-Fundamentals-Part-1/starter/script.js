 // Values and Variables
/* let country = "United States"
let continent = "North America"
let population = "332"

 // Data Types & let, const, and var
const isIsland = false;
const language ="English"
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
// var description = country + " is in " + continent + ", and its 332 million people speak " + language + " .";
var description = `${country} is in ${continent}, and its 332 million people speak ${language}`;
console.log(description);

// Taking Decisions: if / else statements
const populationNew = 332;

 if (populationNew > 33) {
    console.log(`${country}'s population is above average`);
}
    
    else {
        console.log(`${country}'s population is 319 million below average`);
    }
 

// Coding Challenge #1 
// Data-set 1
let markWeight = 78
let markHeight = 1.69

let johnWeight = 92
let johnHeight = 1.95


let markBMI = (markWeight / (markHeight ** 2));
let johnBMI = (johnWeight / (johnHeight ** 2));
console.log(markBMI); //can combine these console.logs w a comma
console.log(johnBMI);
console.log(markBMI > johnBMI);

// Data-set 2
let markWeight2 = 95
let markHeight2 = 1.88

let johnWeight2 = 85
let johnHeight2 = 1.76

let markBMI2 = (markWeight2 / (markHeight2 ** 2));
let johnBMI2 = (johnWeight2 / (johnHeight2 ** 2));
console.log(markBMI2); //can combine these console.logs w a comma
console.log(johnBMI2);
console.log(markBMI2 > johnBMI2); */

//Coding Challenge 2
/* if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2}).`);
}
    else {
        console.log(`John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2}).`);
    }

// Equality Operators == vs ===
const numNeighbors = Number(prompt("How many neighbor countries does your country have?"),);

if (numNeighbors === 1) {
    console.log("Only one border");
}
else if (numNeighbors > 1) {
    console.log("More than one border");
}
else {
    console.log("No borders");
}*/

// Logical Operators
// const speaksEnglish = true;
// const lowPopulation = true;
// const isIsland = true;

// if (speaksEnglish && lowPopulation && !isIsland) {
//     console.log("You should live in the United States!");
// }
//     else {
//         console.log("The United States does not meet your criteria.");
//     }

// Coding Challenge 3
// const dolphinsAvg = ((96 + 108 + 89) / 3);
// const koalasAvg = ((88 + 91 + 110) / 3);

// if (dolphinsAvg > koalasAvg) {
//     console.log("Dolphins win!");
// }
// else if (dolphinsAvg === koalasAvg) {
//     console.log("The match ends in a draw.");
// }
// else {
//     console.log("Koalas win!");
// };

// const dolphinsAvg2 = (97 + 112 + 101) / 3;
// const koalasAvg2 = (109 + 95 + 123) / 3;

// if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= 100) {
//     console.log("Dolphins win!");
// }
// else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= 100) {
//     console.log("Koalas win!");
// }
// else {
//     console.log("The match ends in a draw.");
// };

// const dolphinsAvg3 = ((97 + 112 + 101) / 3);
// const koalasAvg3 = ((109 + 95 + 106) / 3);

// if (dolphinsAvg3 && koalasAvg3 < 100) {
//     console.log("Minumum score requirement not met.");
// }
// else if (dolphinsAvg3 > koalasAvg3 && dolphinsAvg3 > 100) {
//     console.log("Dolphins win!")
// }
// else if (koalasAvg3 > dolphinsAvg3 && koalasAvg3 > 100) {
//     console.log("Koalas win!")
// }
// else {
//     console.log("The match ends in a draw.");
// }

// The switch Statement
// const language = "english"

// switch(language) {
//     case "chinese || mandarin":
//         console.log("MOST number of native speakers!");
//     break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//     break;
//     case "english":
//         console.log("3rd place");
//     break;
//     case "hindi":
//         console.log("Number 4");
//     break;
//     case "arabic":
//         console.log("5th most spoken language");
//     break;
//     default:
//         console.log("Great language too");
//     break;
// }

// The Conditional (Ternary) Operator
// const unitedStates = 332; 
// const population = unitedStates > 33 ? "Portugal's population is below average" : "Portugal's population is above average";
// console.log(population);

// Coding Challenge 4 // Refer to Ternary Operator above!
// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;
// const tip1 = 0.15;
// const tip2 = 0.20;

// if (bill1 >= 50 && bill1 <= 300) {
//     console.log(bill1 * tip1);
// }
// else if (bill1 <= 50 || bill1 >= 300) {
//     console.log(bill1 * tip2);
// }

// if (bill2 >= 50 && bill2 <= 300) {
//     console.log(bill2 * tip1);
// }
// else if (bill2 <= 50 || bill2 >= 300) {
//     console.log(bill2 * tip2);
// }

// if (bill3 >= 50 && bill3 <= 300) {
//     console.log(bill3 * tip1);
// }
// else if (bill3 <= 50 || bill3 >= 300) {
//     console.log(bill3 * tip2);
// }

