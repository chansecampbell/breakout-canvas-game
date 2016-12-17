#Breakout - the canvas game
---

- This is a simple example of the game **Breakout** made in canvas using ES6 syntax. This version is currently unfinished.

- The newly built ES6 version can be found in `js/game.js`. To run this version you must first do a `npm i` and `webpack` in the terminal. Please note that you need webpack installed globally first to run this command. 

- The original game that I built in ES5 can be found in `js/orig.js`.

- Both the ES6 and ES5 versions can then be run on a simple python server.

##Features to add:
	- Add Reset functionality
	- Tidy up the game logic by splitting out:
		- Message displays into `ui.js`
		- Event listeners into `app.js`
	- Create 3 different speed difficulties
    - Create customisable ui