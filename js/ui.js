'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

class Ui {
	drawScore(score) {
	    ctx.font = "16px Courier New";
	    ctx.fillStyle = "#FFF";
	    ctx.fillText("Score: " + score, 8, 20); 
	};

	drawLives(lives) {
        ctx.font = "16px Courier New";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Lives: " + lives, canvas.width-100, 20);
	}

	drawLifeDown(lives) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);   
		const message = "You lose a life. You have " + lives + " remaining.";
		
		ctx.font = "18px Courier New";
		ctx.fillStyle = "#FFF";
		ctx.fillText(message, 40, canvas.height/2);
	}

	drawGameOver(lives) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);   
		const message = lives > 0 ? "You've won the game, congratulations!" : "You're out of lives, it's game over!";
		
		ctx.font = "18px Courier New";
		ctx.fillStyle = "#FFF";
		ctx.fillText(message, 40, canvas.height/2);
	}

}

export default (new Ui);