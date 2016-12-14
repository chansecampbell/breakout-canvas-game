'use strict';

class Game {
    constructor() {
        this.x     = canvas.width / 2;
        this.y     = canvas.height - 30;
        this.dx    = 2;
        this.dy    = -2;
        this.ballRadius = 10;
        this.ball  = new Ball();
    }

    boundaryLogic() {
        if(this.x + this.dx > canvas.width-this.ballRadius) {
            this.dx = -this.dx; 
            console.log("first bounce");
        } else if(this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
            console.log("second bounce");
        } else if(this.y + this.dy > canvas.height-this.ballRadius) {
            this.dy = -this.dy;
            console.log("third bounce");
        } else if(this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
            console.log("fourth bounce");
        }
    }

    draw() {             
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ball.drawBall(this.x, this.y, this.ballRadius);
        this.boundaryLogic();
        this.x += this.dx;
        this.y += this.dy;

        requestAnimationFrame(this.draw.bind(this));
    }
}

class Ball {

    drawBall(width, height, ballRadius) {
        ctx.beginPath();
        ctx.arc(width, height, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}


class Paddle {
    constructor() {

    }
}


class Brick {
    constructor() {
        
    }
}



const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');
document.addEventListener("click", () => {
    new Game().draw();
});
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