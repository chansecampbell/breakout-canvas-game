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
        this.ballRadius = 10;
    }

    boundaryLogic() {
        if(this.x + this.dx > canvas.width-this.ballRadius) {
            this.dx = -this.dx; 
        } else if(this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        } else if(this.y + this.dy > canvas.height-this.ballRadius) {
            this.dy = -this.dy;
        } else if(this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
    }

    draw() {             
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Ball.drawBall(this.x, this.y, this.ballRadius);
        Paddle.drawPaddle();
        this.boundaryLogic();
        this.x += this.dx;
        this.y += this.dy;

        requestAnimationFrame(this.draw.bind(this));
    }
}

document.addEventListener("click", () => { new Game().draw() });