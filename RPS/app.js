const hands = ["rock", "paper", "scissors"];
let count = 1;
let getHand = () => hands[parseInt(Math.random() * 10) % 3];

class PlayerObject {
  constructor(name) {
    this.name = name;
    this.hand = getHand();
    this.wins = 0;
  }
}

let Palmer = new PlayerObject("Palmer");
let Jay = new PlayerObject("Jay");
let Peter = new PlayerObject("Peter");
let Sarah = new PlayerObject("Sarah");
let players = [Palmer, Jay, Peter, Sarah];

let playRound = (p1, p2) => {
  let countString = `${count}`;
  const list = document.getElementById(countString);
  let item = document.createElement("li");
  if (p1.hand === p2.hand) {
    item.innerHTML = `${p1.hand} vs ${p2.hand}. It's a tie.`;
  } else {
    winner =
      (p1.hand === "scissors" && p2.hand === "paper") ||
      (p1.hand === "rock" && p2.hand === "scissors") ||
      (p1.hand === "paper" && p2.hand === "rock")
        ? p1
        : p2;
    winner.wins++;
    item.innerHTML = `${p1.hand} vs ${p2.hand}. ${winner.name} wins.`;
  }
  list.append(item);
  playUntil(p1, p2);
};

let playUntil = (p1, p2) => {
  p1.hand = getHand();
  p2.hand = getHand();
  if (p1.wins === 5 || p2.wins === 5) {
    winner = p1.wins === 5 ? p1 : p2;
    p1.wins = 0;
    p2.wins = 0;
    return winner;
  } else playRound(p1, p2);
};

let playGame = (p1, p2) => {
  let pn = `p${count}`;
  let playerNames = document.getElementById(pn);
  playerNames.innerText = `${p1.name} vs. ${p2.name}`;
  playUntil(p1, p2);
  let wn = `w${count}`;
  let winnerName = document.getElementById(wn);
  winnerName.innerText = `${winner.name} wins the round`;
  count++;
};

let playTournament = p => {
  console.log("\n\n*ROUND 1*\n");
  playGame(p[0], p[1]);
  let game1 = winner;
  playGame(p[2], p[3]);
  let game2 = winner;
  playGame(game1, game2);
  let winnerText = document.getElementById("winner");
  winnerText.innerHTML = `${winner.name} is the WORLD CHAMPION!!!`;
};

playTournament(players);
