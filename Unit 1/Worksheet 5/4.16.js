/*Author:Pablo Torres Antúnez
*/

let num_adivinar = parseInt(prompt("Introduce the number (Player 1): "));
let num = 0;

do{
	num = parseInt(prompt("Try to guess the number (Player 2): "));
	if(num > num_adivinar){
		alert("Your guess is above the number. Try again.");
	}else if(num < num_adivinar){
		alert("Your guess is below the number. Try again.");
	}else{
		alert("Congratulations. You guessed correctly.");
	}
}while(num != num_adivinar);