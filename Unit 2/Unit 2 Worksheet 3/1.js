/*Author: Pablo Torres Antúnez
*/

function invierteCadena(cad_arg){
	let x = cad_arg.length;
  	let cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cad_arg.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

function inviertePalabras(cad_arg){
	let x = cad_arg.length;
  	let cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cad_arg.charAt(x);  		
    x--;
  }
  return cadenaInvertida;
}

function encuentraPalabraMasLarga(cad_arg){
	let x = 0;
  	let npalabra = 0;
  	let comparer = 0;
  	let palabra = "";
  	let palabraAnterior = "";
 
  while (x<cad_arg.length) {
    if(cad_arg.charAt(x) != " "){
    	palabraAnterior += cad_arg.charAt(x);
    	npalabra++;
    }else{
    	if(npalabra > comparer){
    		comparer = npalabra;
    		palabra = palabraAnterior;
    	}
    	npalabra = 0;
    }		
    x++;
  }
  return palabra;
}

function filtraPalabraMasLarga(cad_arg, i){
	let x = 0;
  	let npalabra = 0;
  	let palabras = "";
  	let palabraAnterior = "";
 
  while (x<cad_arg.length) {
    if(cad_arg.charAt(x) != " "){
    	palabraAnterior += cad_arg.charAt(x);
    	npalabra++;
    }else{
    	if(npalabra > i){
    		palabra += palabraAnterior + " ";
    	}
    	npalabra = 0;
    }		
    x++;
  }
  return palabra;
}

function cadenaBienFormada(cad_arg){
	let x = 1;
  	let cadena = "";
 	
 	cadena.charAt(0).toUpperCase();
  while (x<cad_arg.length) {
    if(cad_arg.charAt(x) != " "){
    	cadena += cad_arg.charAt(x).toUpperCase();
    }	
    x++;
  }
  return cadena;
}