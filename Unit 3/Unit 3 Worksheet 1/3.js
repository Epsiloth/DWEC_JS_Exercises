/*Author: Pablo Torres Antúnez
*/

function Lanzamiento(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;
for(let i=0;i<=6000;i++){
	let result = Lanzamiento();
	switch(result){
		case 1:
			n1++;
		break;
		case 2:
			n2++;
		break;
		case 3:
			n3++;
		break;
		case 4:
			n4++;
		break;
		case 5:
			n5++;
		break;
		case 6:
			n6++;
		break;
	}
}

document.write(
	"Number of 1 rolled: " + n1 + "<br>" +
	"Number of 2 rolled: " + n2 + "<br>" +
	"Number of 3 rolled: " + n3 + "<br>" +
	"Number of 4 rolled: " + n4 + "<br>" +
	"Number of 5 rolled: " + n5 + "<br>" +
	"Number of 6 rolled: " + n6 + "<br>")