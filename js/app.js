'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');
const start  = document.getElementById("start");
const restart = document.getElementById("restart");

import Game from "./game";
import Paddle from "./paddle";

start.addEventListener("click", () => {
	Game.draw();
	start.style.display = "none";
    restart.style.display = "inline-block";
});

restart.addEventListener("click", () => {
	// To do 
});

document.addEventListener("keydown", (event) => {
	Paddle.keyDownHandler(event);
});

document.addEventListener("keyup", (event) => {
	Paddle.keyUpHandler(event);
});
