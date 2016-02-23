function myFunction() {
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

alert("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "You win!";
	} else {
            return "Computer wins";}
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "You win!";
	} else {
            return "Computer wins!";
	}
    }
    else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "Computer wins!";
	} else {
            return "You win!";
	}
    }
}

alert(compare(userChoice, computerChoice));
}
