'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

class Ball {

	constructor() {
		this.radius = 10;
	}

    drawBall(width, height) {
        ctx.beginPath();
        ctx.arc(width, height, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

export default (new Ball);