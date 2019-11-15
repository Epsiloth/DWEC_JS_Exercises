import {Roguelike} from './roguelike.js';

//Initialize the game
let Game = new Roguelike();
let direction;
let endgame = false;

//Generate level
Game.createLevel(endgame);

//Print level on screen
Game.PrintLevel();

//Start the game
let again = "";
let intr = setInterval(
	function(){ 
		if(endgame){
			alert("You have lost.");
			again = prompt("Want to play again? [y]es or [n]o: ");
			if(again == "y"){
				endgame = false;
				again = "";
				Game.createLevel();
				Game.PrintLevel(endgame);
			}else{
				clearInterval(intr);
			}
		}else{
			direction = prompt("Select where you want to move: [r]ight, [l]eft, [u]p or [d]own.");
			endgame=Game.Move(direction);
			Game.PrintLevel(endgame);
		}
	}, 1000);