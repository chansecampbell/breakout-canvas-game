'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');
const start  = document.getElementById("start");
const restart = document.getElementById("restart");

start.addEventListener("click", () => {
    new Game().draw();
    start.style.display = "none";
    restart.style.display = "inline-block";
});

import Ball from "./ball";
import Paddle from "./paddle";
import Bricks from "./bricks";

class Game {
    constructor() {
        this.x      = canvas.width / 2;
        this.y      = canvas.height - 30;
        this.dx     = 3;
        this.dy     = -3;
        this.score  = 0;
        this.lives  = 2;
        this.running = true;
    }

    collisionDetection() {
        for(let c = 0; c < Bricks.columnCount; c++) {
            for(let r = 0; r < Bricks.rowCount; r++) {
                let b = Bricks.bricks[c][r];
                if(b.status == 1) {
                    if(this.x > b.x && this.x < b.x+(Bricks.width+5) && this.y > b.y && this.y < b.y+(Bricks.height+5)) {
                        this.dy = -this.dy;
                        b.status = 0;
                        this.score++;
                        if(this.score == Bricks.rowCount*Bricks.columnCount) {
                            this.drawGameOver();
                        }
                    }
                }  
            }
        }
    }

    boundaryLogic() {
        if(this.x + this.dx > canvas.width-Ball.radius || this.x + this.dx < Ball.radius) {
            this.dx = -this.dx;
        }

        if(this.y + this.dy < Ball.radius) {
            this.dy = -this.dy;
        }

        if(this.y + this.dy > canvas.height-20) {

            // check for paddle collision if the bottom wall is hit
            if(this.x > Paddle.paddleX && this.x < Paddle.paddleX + Paddle.width) {
                this.dy = -this.dy;
            } else {
                this.lives--;
                if(this.lives > 0) {
                    this.drawLifeLost();
                }
                else {
                    this.drawGameOver();
                }
            } 
        }
    }

    drawScore() {
        ctx.font = "16px Courier New";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Score: " +this.score, 8, 20); 
    }

    drawLives() {
        ctx.font = "16px Courier New";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Lives: " +this.lives, canvas.width-100, 20);
    }

    continueGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
        this.running = true;
        this.x      = canvas.width / 2;
        this.y      = canvas.height - 30;
        this.dx     = 3;
        this.dy     = -3;
        this.draw();
    }

    drawLifeLost() {
        this.running = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
        const message = "You lose a life. You have " + this.lives + " remaining.";
        ctx.font = "18px Courier New";
        ctx.fillStyle = "#FFF";
        ctx.fillText(message, 40, canvas.height/2);
        setTimeout(this.continueGame.bind(this), 3000);
    }

    drawGameOver() {
        this.running = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
        const message = this.lives > 0 ? "You've won the game, congratulations!" : "You're out of lives, it's game over!";
        ctx.font = "18px Courier New";
        ctx.fillStyle = "#FFF";
        ctx.fillText(message, 40, canvas.height/2);
    }

    draw() {             
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        Bricks.draw();
        Ball.draw(this.x, this.y);
        Paddle.draw();
        this.drawScore();
        this.drawLives();

        this.boundaryLogic();
        this.collisionDetection();

        this.x += this.dx;
        this.y += this.dy;

        if(this.running) { requestAnimationFrame(this.draw.bind(this)); }
    }
}
