'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

class Paddle {
    constructor() {
        this.height = 10;
        this.width  = 75;
        this.paddleX      = (canvas.width-this.width)/2;
        this.rightPressed = false;
        this.leftPressed  = false;
    }

    keyDownHandler(e) {
        if(e.keyCode == 39) {
            this.rightPressed = true;
        } else if(e.keyCode == 37) {
            this.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if(e.keyCode == 39) {
            this.rightPressed = false;
        } else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
    }

    move() {
        if(this.rightPressed && this.paddleX < canvas.width-this.width) {
            this.paddleX += 7;
        }
        else if(this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.paddleX, canvas.height-this.height, this.width, this.height);
        ctx.fillStyle = "#E040FB";
        ctx.fill();
        ctx.closePath();
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        this.move();
    }
}

export default (new Paddle);