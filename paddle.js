'use strict';

class Paddle {
    constructor() {
        this.paddleHeight = 10;
        this.paddleWidth  = 75;
        this.paddleX      = (canvas.width-this.paddleWidth)/2;
        this.rightPressed = false;
        this.leftPressed  = false;
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }
// keydown & up not currently working
    keyDownHandler(e) {
        console.log("down");
        if(e.keyCode == 39) {
            this.rightPressed = true;
            Paddle.hello();
        } else if(e.keyCode == 37) {
            this.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        console.log("up");
        if(e.keyCode == 39) {
            this.rightPressed = false;
        } else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
    }


    move() {
        if(this.rightPressed && this.paddleX < canvas.width-this.paddleWidth) {
            this.paddleX += 7;
        }
        else if(this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
    }

    drawPaddle() {
        ctx.beginPath();
        ctx.rect(this.paddleX, canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

export default Paddle;