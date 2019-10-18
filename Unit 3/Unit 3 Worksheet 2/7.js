/*Author: Pablo Torres Antúnez
*/

function SetToZero(array){
	for(let i=0;i<10;i++){
		array[i] = 0;
	}
	return array;
}

function IncreaseOne(array){
	for(let i=0;i<array.length;i++){
		array[i] += 1;
	}
	return array;
}

function ShowArray(array){
	for(let i=0;i<array.length;i++){
		document.write(array[i] + " ");
	}
}