
window.onload = start;
var picks = 0;
var firstChoice;
var secondChoice;
var matches = 0;
var numberOfAttempts = 0;
var backOfCard = "?";
var cards = document.getElementsByTagName('td');
var tiles = ['A', 'B', 'A', 'B'];
var newTiles = [];

var numberOfMatchingCards = 0.5 * tiles.length;


function start() {
    var cards = document.getElementsByTagName('td');
    for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", choose);
  }
}

function choose(event) {
//check if table element is question mark.
var tile = event.target;
//if yes, replace questionmark with tile index of element.
//if no, do nothing.
//shuffle cards
	if (tile.textContent == "?") {
	if (picks === 0 || 1) {
	var tileId = parseInt(tile.getAttribute('id'));	
    tile.textContent = tiles[tileId];
    newTiles.push(tiles[tileId]);
    newTiles.push(tileId);
    picks ++;
  } 
 if (picks == 2) { 
 	check(newTiles);
 }
}
}

function check(tileArray) {
//if the two tiles that have been selected match,
	console.log(newTiles[1], newTiles[3]);

	if (tileArray[0] == tileArray[2]) {
	
	}

//then leave them as they are.
	else {
		console.log('changing back to question mark');
		resetTiles([tileArray[1], tileArray[3]]);
	}
//If the two tiles dont match,
//then change them back to question marks	
}

function resetTiles(tileIds) {
// changing text content back to question mark
	for (i =0; i < tileIds.length; i++) {
		var cards = document.getElementsByTagName('td');
		cards[tileIds[i]].textContent = '?';	
		console.log(cards);
		console.log(tileIds[i]);
		picks = 0;
	}

}
