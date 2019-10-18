/*Author: Pablo Torres Antúnez
*/
function Potencia(base, exponente){
	let result = base;
	if(exponente > 1){
		result = base*base;
		let new_exp = exponente-1;
		result = Potencia(result, new_exp); 	
	}
	return result;
}


function Volumen(radio){
	return Math.round(((4*Math.PI*Potencia(radio, 3))/3)*100)/100;
}
function Area(radio){
	return Math.round((Math.PI*Potencia(radio, 2))*100)/100;
}

let radio = parseFloat(prompt("Introduce the radio in centimeters: "));

document.write("Potency of " + radio + "<sup>10</sup>: " + Potencia(radio, 10) + "<br>");
document.write("The esfere's volume is " + Volumen(radio) + "cm<sup>3</sup><br>");
document.write("The circle's area is " + Area(radio) + "cm<sup>2</sup>");