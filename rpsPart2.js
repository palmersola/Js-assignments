const hands = ["rock", "paper", "scissors"];

let getHand = function() {
  return hands[parseInt(Math.random() * 10) % 3];
};

let players = [
  {
    name: "Palmer",
    hand: getHand(),
    wins: 0
  },
  {
    name: "Jay",
    hand: getHand(),
    wins: 0
  },
  {
    name: "Peter",
    hand: getHand(),
    wins: 0
  },
  {
    name: "Sarah",
    hand: getHand(),
    wins: 0
  }
];

let playRound = function(p1, p2) {
  if (p1.hand === p2.hand) {
    console.log(p1.hand + " vs " + p2.hand + ". It's a tie");
  } else {
    if (
      (p1.hand === "rock" && p2.hand === "paper") ||
      (p1.hand === "paper" && p2.hand === "scissors") ||
      (p1.hand === "scissors" && p2.hand === "rock")
    ) {
      p2.wins++;
      winner = p2;
    } else {
      p1.wins++;
      winner = p1;
    }
    console.log(p1.hand + " vs " + p2.hand + ". " + winner.name + " wins.");
  }
  playUntil(p1, p2);
};

let playUntil = function(p1, p2) {
  p1.hand = getHand();
  p2.hand = getHand();
  if (p1.wins === 5 || p2.wins === 5) {
    if (p1.wins === 5) {
      winner = p1;
    } else winner = p2;
    p1.wins = 0;
    p2.wins = 0;
    return winner;
  } else playRound(p1, p2);
};

let playGame = function(p1, p2) {
  console.log("-" + p1.name + " vs. " + p2.name + "-\n");
  playUntil(p1, p2);
  console.log("\n<" + winner.name + " wins the round>\n");
};

let playTournament = function(p) {
  console.log("\n\n*ROUND 1*\n");
  playGame(p[0], p[1]);
  let game1 = winner;

  console.log("\n\n**ROUND 2**\n");
  playGame(p[2], p[3]);
  let game2 = winner;

  console.log("\n\n***FINAL ROUND***\n");
  playGame(game1, game2);
  let tournamentWinner = winner;
  console.log(tournamentWinner.name + " is the WORLD CHAMPION!!!");
};

playTournament(players);
