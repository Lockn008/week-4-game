$( document ).ready(function() {
    console.log( "ready!" );

//initialize game by declaring base variables
	//target score, users current score, wins, losses
var targetScore;
var userScore;
var wins = 0;
var losses = 0;
var crystalValues;

var resetGame = function() {
	targetScore = Math.floor(Math.random() * 102) + 19;
	userScore = 0;
	crystalValues = [];
};

var setGemValues = function () {
	//if crystalValues.length is 4 or less, keep adding values until it is 4
	while (crystalValues.length < 4) { // needs to say less than 4 because if it is 3, it will run and add a value, if it is 4, it will stop
		//var to select random values
		var randomPoint;
		var pointRandomizer = function() {
			randomPoint = Math.floor(Math.random()*12)+1;
		}

		pointRandomizer();


		//function to check if assigned random point value has been selected already
		var repeatBool = false;
		for (var i = 0; i <= crystalValues.length; i++) {
			console.log(randomPoint);
			console.log(crystalValues[i]);
			if (randomPoint == crystalValues[i]) {
				repeatBool = false;
				break;
			} else {
				repeatBool = true;
			}
		}
		if (repeatBool === true) {
			crystalValues.push(randomPoint);
		}
	}
};

var setGame = function() {
	resetGame();
	setGemValues();
};

var checkScore = function() {
	if (userScore === targetScore) {
		wins++;
		setGame();
		$('#win-lose').text("You won!");
	} else if (userScore > targetScore) {
		losses++;
		setGame();
		$('#win-lose').text("You lost!");
	}
};


var runGame = function() {
	console.log(userScore);
	checkScore();
	updateDisplay();
};

 var updateDisplay = function() {
	$('#target-score').text(targetScore);
	$('#win-score').text(wins);
	$('#loss-score').text(losses);
	$('#user-score').text(userScore);
};

setGame();
updateDisplay();

$('#yellow-gem').on("click", function(){
	userScore = userScore + crystalValues[0];
	runGame();
});
$('#red-gem').on("click", function(){
	userScore = userScore + crystalValues[1];
	runGame();
});
$('#green-gem').on("click", function(){
	userScore = userScore + crystalValues[2];
	runGame();
});
$('#blue-gem').on("click", function(){
	userScore = userScore + crystalValues[3];
	runGame();
});


});