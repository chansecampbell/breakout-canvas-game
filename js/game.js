'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

import Ball from "./ball";
import Paddle from "./paddle";
import Bricks from "./bricks";

class Game {
    constructor() {
        this.x      = canvas.width / 2;
        this.y      = canvas.height - 30;
        this.dx     = 2;
        this.dy     = -2;
    }

    collisionDetection() {
        for(let c = 0; c < Bricks.columnCount; c++) {
            for(let r = 0; r < Bricks.rowCount; r++) {
                let b = Bricks.bricks[c][r];
                if(b.status == 1) {
                    if(this.x > b.x && this.x < b.x+Bricks.width && this.y > b.y && this.y < b.y+Bricks.height) {
                        this.dy = -this.dy;
                        b.status = 0;
                        // score++;
                        // if(score == brickRowCount*brickColumnCount) {
                        //     alert("YOU WIN, CONGRATULATIONS!");
                        //     document.location.reload();
                        // }
                    }
                }  
            }
        }
    }

    boundaryLogic() {
        // if(this.x + this.dx > canvas.width-Ball.radius) {
        //     this.dx = -this.dx; 
        // } else if(this.x + this.dx < Ball.radius) {
        //     this.dx = -this.dx;
        // } else if(this.y + this.dy > canvas.height-Ball.radius) {
        //     this.dy = -this.dy;
        // } else if(this.y + this.dy < Ball.radius) {
        //     this.dy = -this.dy;
        // }
            // collision logic
        if(this.x + this.dx > canvas.width-Ball.radius || this.x + this.dx < Ball.radius) {
            this.dx = -this.dx;
        }

        if(this.y + this.dy < Ball.radius) {
            this.dy = -this.dy;
        }

        if(this.y + this.dy > canvas.height-Ball.radius) {

            // check for paddle collision if the bottom wall is hit
            if(this.x > Paddle.paddleX && this.x < Paddle.paddleX + Paddle.width) {
                this.dy = -this.dy;
            }
            // } else {
            //     this.x = canvas.width/2;
            //     this.y = canvas.height-30;
            //     this.dx = 2;
            //     this.dy = -2;
            //     Paddle.paddleX = (canvas.width-Paddle.width)/2;
            // }
        }
    }

    draw() {             
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Bricks.draw();
        Ball.draw(this.x, this.y);
        Paddle.draw();
        this.boundaryLogic();
        this.collisionDetection();
        this.x += this.dx;
        this.y += this.dy;

        requestAnimationFrame(this.draw.bind(this));
    }
}

document.addEventListener("click", () => { new Game().draw() });