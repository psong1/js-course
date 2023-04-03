const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnabry',
            'Mane'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4:0',
    scored: ['Mane', 'Gnabry', 'Mane', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allPlayers = [ ...game.players[0], ...game.players[1]];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`)
}

printGoals('Davies', 'Muller', 'Mane', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');

// Number 1
const goals = Object.keys(game.scored);
let goalsStr = `Goal ${goals}: `;
console.log(goals);

for (scorer of Object.keys(game.scored)) {
    goalsStr += `${goals}:` 
};
console.log(goalsStr);

const entries = Object.entries(game.scored);
console.log(entries);

for (const [goals, scorer] of game.scored.entries()) {
    console.log(`Goal ${goals + 1}: ${scorer}`);
}

// Number 2
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
    avg += odd;
    avg /= odds.length;
};
console.log(avg);

// Number 3
const bayernM = game.team1;
const dortmund = game.team2;
console.log(bayernM);
console.log(dortmund);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}:`
    console.log(`Odd of ${teamStr}: ${odd}`);
}
