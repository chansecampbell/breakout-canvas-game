'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

class Ball {

    drawBall(width, height, ballRadius) {
        ctx.beginPath();
        ctx.arc(width, height, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

export default (new Ball);