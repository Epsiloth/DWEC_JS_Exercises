/*Author: Pablo Torres Antúnez
*/

function ParesImpares(){
	let array = [];
	for(let i=0;i<100;i++){
		array.push(Math.floor(Math.random() * (1001 - 1) + 1));
	}
	return array;
}

function Ordenar(array){
	let arrayPares = [];
	let arrayImpares = [];
	for(let i=0;i<array.length;i++){
		if(array[i]%2){
			arrayPares.push(array[i]);
		}else{
			arrayImpares.push(array[i]);
		}
	}
	let arrayFinal = arrayPares.concat(arrayImpares);
	return arrayFinal;
}

let array = ParesImpares();

for(let i=0;i<array.length;i++){
	document.write(array[i] + " ");
}
document.write("<br><br>");

array = Ordenar(array);

for(let i=0;i<array.length;i++){
	document.write(array[i] + " ");
}