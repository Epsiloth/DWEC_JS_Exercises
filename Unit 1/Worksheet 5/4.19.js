/*Author:Pablo Torres Antúnez
*/

let altanch = parseInt(prompt("Introduce the height and width (px): "));
let altern = true;
document.write("<table border=1>");
for(let i=1;i<=8;i++){
	document.write("<tr "+"width="+altanch+" height="+altanch+">");
	for(let j=1;j<=8;j++){
		if(altern){
			document.write("<td "+"width="+altanch+" height="+altanch+" bgcolor=black></td>");
			altern = false;
		}else{
			document.write("<td "+"width="+altanch+" height="+altanch+" bgcolor=white></td>");
			altern = true;
		}
		
	}
	if(altern){
		altern=false;
	}else{
		altern=true;
	}
	document.write("</tr>");
}
document.write("</table>");