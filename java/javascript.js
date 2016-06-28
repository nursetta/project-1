
window.onload = start;
var picks = 0;
var firstChoice;
var secondChoice;
var matches = 0;
var numberOfAttempts = 0;
var backOfCard = "?";

var tiles = ['A', 'B', 'A', 'B'];

var numberOfMatchingCards = 0.5 * tiles.length;


function start() {
    var cards = document.getElementsByTagName('td');
    for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", choose);
  }
choose();
}

function choose(card) {
  if (picks == 2) {
    //return;
    console.log("nothing");
  }
  if (picks === 0) {
    firstChoice = card;
    card.target.textContent = tiles[0];
    card.target.setAttribute('class', [card]);
    picks = 1;
    console.log("1stCard");
  } else {
    picks = 2;
    secondChoice = card;
    card.target.textContent = tiles[1];
    card.target.setAttribute('class', [card]);

  }
}