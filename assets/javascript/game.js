//initialize game by declaring base variables
	//target score, users current score, wins, losses
var targetScore;
var userScore;
var wins;
var losses;
var crystalValues;

var initializeGame = function() {
	targetScore = Math.floor(Math.random() * 102) + 19;
	userScore = 0;
	wins = 0;
	losses = 0;
	crystalValues = [];
}

initializeGame();

//if crystalValues.length is 4 or less, keep adding values until it is 4
while (crystalValues.length < 4) { // needs to say less than 4 because if it is 3, it will run and add a value, if it is 4, it will stop
	//var to select random values
	var randomPoint;
	var pointRandomizer = function() {
		randomPoint = Math.floor(Math.random()*12)+1;
	}

	pointRandomizer();

	//function to check if assigned random point value has been selected already

	for (var i = 0; i <= crystalValues.length; i++) {
		if (randomPoint === crystalValues[i]) {
			pointRandomizer();
		} else {
			crystalValues.push(randomPoint);
			break;
		}
	}
}

