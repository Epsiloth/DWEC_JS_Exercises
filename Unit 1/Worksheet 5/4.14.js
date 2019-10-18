/*Author:Pablo Torres Antúnez
*/

let ncolumnas = parseInt(prompt("Introduce the number of columns: "));
let altura = parseInt(prompt("Introduce the height (px): "));
let anchura = parseInt(prompt("Introduce the width (px): "));

document.write("<table border=1>");
let i=0;
while(i<ncolumnas){
	if(i%2==1){
		document.write("<td "+"width="+anchura+" height="+altura+" bgcolor=white></td>");
	}else{
		document.write("<td "+"width="+anchura+" height="+altura+" bgcolor=black></td>");
	}
	i++;
}
document.write("</table>");