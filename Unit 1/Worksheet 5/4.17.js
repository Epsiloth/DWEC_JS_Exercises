/*Author:Pablo Torres Antúnez
*/

for(let i=0;i<=10;i++){
	document.write("<b><u>Tabla del "+i+"</u></b><br>");
	for(let j=0;j<=10;j++){
		let result = i*j;
		document.write(i+"x"+j+"="+result+"<br>");
	}
	document.write("<br>");
}