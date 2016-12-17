'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

import Ui from "./ui";
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
                            this.end();
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
                    this.pause();
                }
                else {
                    this.end();
                }
            } 
        }
    }

    pause() {
        this.running = false;
        Ui.drawLifeDown(this.lives);
        setTimeout(this.continue.bind(this), 3000);
    }

    continue() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
        this.running = true;
        this.x      = canvas.width / 2;
        this.y      = canvas.height - 30;
        this.dx     = 3;
        this.dy     = -3;
        this.draw();
    }

    end() {
        this.running = false;
        Ui.drawGameOver(this.lives);
    }

    draw() {             
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        Bricks.draw();
        Ball.draw(this.x, this.y);
        Paddle.draw();
        Ui.drawScore(this.score);
        Ui.drawLives(this.lives);

        this.boundaryLogic();
        this.collisionDetection();

        this.x += this.dx;
        this.y += this.dy;

        if(this.running) { requestAnimationFrame(this.draw.bind(this)); }
    }
}

export default (new Game);






