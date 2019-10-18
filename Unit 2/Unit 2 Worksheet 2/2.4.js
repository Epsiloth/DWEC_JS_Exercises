/*Author: Pablo Torres Antúnez
*/
respuesta = "";
do{
	let cateto1 = parseInt(prompt("Intoduce first side of the triangle: "));
	let cateto2 = parseInt(prompt("Intoduce second side of the triangle: "));
	let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
	alert("Hipotenusa = " + hipotenusa);
	respuesta = prompt("Do you wish to continue? Say N to exit: ");
}while(respuesta != "N");