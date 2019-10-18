/*Author:Pablo Torres Antúnez
*/

let ncolumnas = parseInt(prompt("Introduce the number of columns: "));
let nfilas = parseInt(prompt("Introduce the number of rows: "));
let altura = parseInt(prompt("Introduce the height (px): "));
let anchura = parseInt(prompt("Introduce the width (px): "));

document.write("<table border=1>");
for(let i=1;i<=nfilas;i++){
	document.write("<tr "+"width="+anchura+" height="+altura+">");
	for(let j=1;j<=ncolumnas;j++){
		document.write("<td "+"width="+anchura+" height="+altura+"></td>");
	}
	document.write("</tr>");
}
document.write("</table>");