$(document).ready(function(){


/* sets the scores to zero.*/
let userScore = 0;
let computerScore = 0;
/*stores the DOM variables*/
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv =document.getElementById("scissors");

function getComputerChoice(){
	const choices = ["rock","paper","scissors"];
	const randomNum = Math.floor(Math.random() * 3);//sets the pick from the array from 0-2.
	return choices[randomNum]; //makes random choices from the array	
}

function convertWord(word){
	if(word ==="rock") return "Rock";
	if(word ==="paper") return "Paper";
	return "Scissors";

}

function win(userChoice, computerChoice){
	userScore++;
	userScoreSpan.innerHTML = userScore;
	compScoreSpan.innerHTML = computerScore;
	result_p.innerHTML = convertWord(userChoice) + " beats " + convertWord(computerChoice) + ". You Win!";
	

}

function lose(userChoice, computerChoice){
	computerScore++;
	userScoreSpan.innerHTML = userScore;
	compScoreSpan.innerHTML = computerScore;
	result_p.innerHTML = convertWord(computerChoice) + " beats " + convertWord(userChoice) + ". You Lose!";
}

function draw(userChoice, computerChoice){
	result_p.innerHTML = "It's a draw!!!";

}


function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case"rockscissors":
		case"paperrock":
		case"scissorspaper":
			win(userChoice,computerChoice);
			break;
		case"rockpaper":
		case"paperscissors":
		case"scissorsrock":
			lose(userChoice,computerChoice);
			break;
		case"rockrock":
		case"rockrock":
		case"scissorsscissors":
			draw(userChoice,computerChoice);
			break;
	}
}


function main() {
rockDiv.addEventListener('click', function(){
	game("rock");
});

paperDiv.addEventListener('click', function(){
	game("paper");

});

scissorsDiv.addEventListener('click', function(){
	game("scissors");

});

}

main();
















});