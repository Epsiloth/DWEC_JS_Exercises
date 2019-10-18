/*Author: Pablo Torres Antúnez
*/

function Lanzamiento(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}

for(let i=0;i<=10;i++){
	document.write("Dice result: " + Lanzamiento() + "<br>");
}

