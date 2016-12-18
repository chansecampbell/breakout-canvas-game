'use strict';
const canvas = document.getElementById("myCanvas");
const ctx    = canvas.getContext('2d');
const start  = document.getElementById("start");
const restart = document.getElementById("restart");

import Game from "./game";
import Paddle from "./paddle";

const game = Game;

start.addEventListener("click", () => {
	new game;	
	start.style.display = "none";
 	// restart.style.display = "inline-block";
});

document.addEventListener("keydown", (event) => {
	Paddle.keyDownHandler(event);
});

document.addEventListener("keyup", (event) => {
	Paddle.keyUpHandler(event);
});
