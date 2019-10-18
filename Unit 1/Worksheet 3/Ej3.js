/*Author Pablo Torres Antúnez
3. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age, amountperday){
	const maxage = 90;
	let restoflife = maxage - age;
	let supply = Math.round((restoflife*(amountperday*365))*100)/100;

	alert("You will need " + supply + " to last you until the ripe old age of " + maxage);
}

for(i=0; i<3; i++){
	let age = parseInt(prompt("Introduce your age: "));
	let amountperday = parseFloat(prompt("Introduce your amount per day: "));

	calculateSupply(age, amountperday);
}