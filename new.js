'use strict';

class Game {
    constructor() {
        this.canvas  = document.getElementById("myCanvas");
        this.ctx     = this.canvas.getContext('2d');
        this.width   = this.canvas.width / 2;
        this.height  = this.canvas.height - 30;
        this.dWidth  = 2;
        this.dHeight = -2;
        this.ball    = new Ball();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.drawBall(this.width, this.height);
        this.width += this.dWidth;
        this.height += this.dHeight;

        requestAnimationFrame(this.draw.bind(this));
    }
}

class Ball {
    constructor() {
        this.ballRadius = 10;
        this.canvas  = document.getElementById("myCanvas");
        this.ctx     = this.canvas.getContext('2d');
    }

    drawBall(height, width) {
        this.ctx.beginPath();
        this.ctx.arc(width, height, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

new Game().draw();
// 'use strict';
// class Ball {

//     drawBall() {
//         console.log("Drawing ball");
//         this.ballRadius = 10;
//         props.ctx.beginPath();
//         props.ctx.arc(props.width, props.height, this.ballRadius, 0, Math.PI*2);
//         props.ctx.fillStyle = "#0095DD";
//         props.ctx.fill();
//         props.ctx.closePath();
//     }
// }


// class Game extends Ball {
//     constructor() {
//         super()
//         this.canvas  = document.getElementById("myCanvas");
//         this.ctx     = this.canvas.getContext('2d');
//         this.width   = this.canvas.width / 2;
//         this.height  = this.canvas.height - 30;
//         this.dWidth  = 2;
//         this.dHeight = -2;
//         this.score   = 0;
//         this.lives   = 3;
//         // this.ball    = new Ball();
//         // // this.paddle  = new Paddle();
//         this.draw();
//     }

//     draw() {
//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//         this.drawBall();
//         this.width += this.dWidth;
//         this.height += this.dHeight;
//         requestAnimationFrame(this.draw.bind(this));
//     }
// }
// // class Paddle extends Game {
// //     constructor() {
// //         this.paddleHeight = 10;
// //         this.paddleWidth  = 75;
// //         this.paddleX      = (this.canvas.width-this.paddleWidth)/2;
// //     }
// // }

// // class Bricks {
// //     constructor() {
// //         this.brickRowCount    = 3;
// //         this.brickColumnCount = 5;
// //         this.brickWidth       = 75;
// //         this.brickHeight      = 20;
// //         this.brickPadding     = 10;
// //         this.brickOffsetTop   = 30;
// //         this.brickOffsetLeft  = 30;
// //     }
// // }

// new Game;