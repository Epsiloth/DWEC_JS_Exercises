/*Author: Pablo Torres Antúnez
*/

function validateCreditCard(number){
	let array = (""+number).split("").map(Number);
	let sumatoria = 0;
	let nDistintos = 0;
	let placeHolder = 0;
	document.write(array + "<br>");
	if(array.length != 16){
		document.write("Array length is not 16<br>");
		return false;
	}else{
		for(let i=0; i<array.length;i++){
			sumatoria += array[i];
			if(isNaN(array[i])){
				document.write("isNaN<br>");
				return false;
			}
			if(array[i] != placeHolder){
				placeHolder = array[i];
				nDistintos ++;
			}
		}
		if(sumatoria <= 16){
			document.write("Array does not sum more than 16<br>");
			return false;
		}else if(nDistintos < 2){
			document.write("Not enough different numbers<br>");
			return false;
		}else if(array[array.length-1]%2 != 0){
			document.write("Last number is not even<br>");
			return false;
		}else{
			return true;
		}
	}
}

tarjeta = parseInt(prompt("Introduce your credit card number: "));

resultado = validateCreditCard(tarjeta);

if(resultado){
	document.write("The number is valid.");
}else{
	document.write("The number is invalid.");
}
