'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');

class Bricks {
    constructor() {
    	this.rowCount = 3;
    	this.columnCount = 5;
    	this.width = 75;
    	this.height = 20;
    	this.padding = 10;
    	this.offsetTop = 30;
    	this.offsetLeft = 30;
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
	                ctx.fillStyle = "#0095DD";
	                ctx.fill();
	                ctx.closePath();
            	}
        	}
    	}
    }
}

export default (new Bricks);