/*Author: Pablo Torres Antúnez
*/

function Maximo(n1, n2, n3, n4){
	currentMax = 0;
  nArray = [n1, n2, n3, n4];
  for(let i=0;i<nArray.length;i++){
    if(currentMax <= nArray[i])
      currentMax = nArray[i];
  }
  return currentMax;
}

numbers = [];
for(let i=0;i<4;i++){
    show_i = i+1;
    numbers[i]=parseInt(prompt("Introduce number " + show_i + ":"));
}

document.write("Max number is: " + Maximo(numbers[0], numbers[1], numbers[2], numbers[3]));