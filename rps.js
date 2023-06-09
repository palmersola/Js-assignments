const hands = ["rock", "paper", "scissors"];

let getHand = function() {
  return hands[parseInt(Math.random() * 10) % 3];
};

let plyr1 = {
  name: "Palmer",
  hand: getHand(),
  wins: 0
};

let plyr2 = {
  name: "Loser",
  hand: getHand(),
  wins: 0
};

let playRound = function(p1, p2) {
  if (p1.hand === p2.hand) {
    console.log(p1.hand + " vs " + p2.hand + ". It's a tie");
  } else {
    if (p1.hand === "rock") {
      if (p2.hand === "paper") {
        p2.wins++;
        console.log(
          p1.hand + " vs " + p2.hand + ". " + p2.name + " wins round"
        );
      } else {
        p1.wins++;
        console.log(
          p1.hand + " vs " + p2.hand + ". " + p1.name + " wins round"
        );
      }
    } else if (p1.hand === "paper") {
      if (p2.hand === "scissors") {
        p2.wins++;
        console.log(
          p1.hand + " vs " + p2.hand + ". " + p2.name + " wins round"
        );
      } else {
        p1.wins++;
        console.log(
          p1.hand + " vs " + p2.hand + ". " + p1.name + " wins round"
        );
      }
    } else {
      if (p2.hand === "rock") {
        p2.wins++;
        console.log(
          p1.hand + " vs " + p2.hand + ". " + p2.name + " wins round"
        );
      } else {
        p1.wins++;
        console.log(
          p1.hand + " vs " + p2.hand + ". " + p1.name + " wins round"
        );
      }
    }
  }
  play();
};

let play = function(p1, p2) {
  console.log(p1.wins);
  p2.hand = getHand();
  if (p1.wins === 3) {
    console.log(p1.name + " wins!");
  } else if (p2.wins === 3) {
    console.log(p2.name + " wins!");
  } else {
    setTimeout(() => {
      playRound(p1, p2);
    }, 1000);
  }
};

play(plyr1, plyr2);
