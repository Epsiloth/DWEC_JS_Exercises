/*Author: Pablo Torres Antúnez
*/

date = new Date();

function reloj(date){
	alert(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
	date = new Date();
	setTimeout(reloj(date), 1000);
}

reloj(date);