/*Author: Pablo Torres Antúnez
*/

document.write("Countdown has started.<br>");

let date = new Date("Jan 5, 2021 15:37:25").getTime();
;

function countdown(date){
  // Update the count down every 1 second
  let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.write(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.write("Countdown finished.");
  }
}, 1000);
	
}

countdown(date);