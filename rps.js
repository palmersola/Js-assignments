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

let play = function() {
  plyr1.hand = getHand();
  plyr2.hand = getHand();
  if (plyr1.wins === 3) {
    console.log(plyr1.name + " wins!");
  } else if (plyr2.wins === 3) {
    console.log(plyr2.name + " wins!");
  } else {
    setTimeout(() => {
      playRound(plyr1, plyr2);
    }, 1000);
  }
};

play();
