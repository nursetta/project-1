
window.onload = start;

var picks = 0;
var tiles = ['A', 'H', 'G', 'B', 
			 'F', 'C', 'F', 'H', 
			 'B', 'G', 'A', 'E',
			 'E', 'D', 'D', 'C'];
var newTiles = [];
var matches = 0;

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
	if (picks === 0 || picks == 1) {
	var tileId = parseInt(tile.getAttribute('id'));	
    tile.textContent = tiles[tileId];
    newTiles.push(tiles[tileId]);
    newTiles.push(tileId);
  	picks ++;
  	console.log(newTiles);
	} 
 
 if (picks == 2) { 
 	setTimeout(function() {
 		console.log(newTiles);
 		check(newTiles);
 		newTiles = [];
 		}, 500);
 	}
}

function check(tileArray) {
//if the two tiles that have been selected match,
	console.log(newTiles[1], newTiles[3]);
	if (tileArray[0] == tileArray[2]) {
	matches ++;
	picks = 0;
	matching();
	}
//then leave them as they are.
	else {
		console.log('changing back to question mark');
		resetTiles([tileArray[1], tileArray[3]]);
		picks = 0;
		newTiles = [];
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
	}
}

function matching() {
	if (matches == (document.getElementsByTagName('td').length * 0.5)) {
	alert("You WON!" + " " + "Click OK to play Again!");
	window.location.reload();
	}
}


