'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

const colors = ["#f44336", "#FFEB3B", "#FF9800", "#8BC34A", "#03A9F4", "#26C6DA"];

class Bricks {
    constructor() {
    	this.rowCount = 6;
    	this.columnCount = 8;
    	this.width = 75;
    	this.height = 15;
    	this.padding = 5;
    	this.offsetTop = 60;
    	this.offsetLeft = 70;
    	this.bricks = [];
    	this.build();
    }

    build() {
		for(let c = 0; c < this.columnCount; c++) {
		    this.bricks[c] = [];
		    for(let r = 0; r < this.rowCount; r++) {
		        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
	    	}
    	}
	}

    draw() {
    	for(let c = 0; c < this.columnCount; c++) {
        	for(let r = 0; r < this.rowCount; r++) {
            	if(this.bricks[c][r].status == 1) {
                	let brickX = (c*(this.width+this.padding))+this.offsetLeft;
                	let brickY = (r*(this.height+this.padding))+this.offsetTop;
	                this.bricks[c][r].x = brickX;
	                this.bricks[c][r].y = brickY;
	                ctx.beginPath();
	                ctx.rect(brickX, brickY, this.width, this.height);
	                ctx.fillStyle = colors[r];
	                ctx.fill();
	                ctx.closePath();
            	}
        	}
    	}
    }
}

export default (new Bricks);