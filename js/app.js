$(document).ready(function() {
	
	$("button#play").click(function() {

		var userChoice = +(document.getElementById('user-choice').value);
		if (userChoice < 1 || userChoice > 100) {
			alert("Please Enter a number between 1 and 100");
		} 
		else {
			checkNumber(userChoice);
		}
				
	});

	$("button#reset").click(function(){
		$("#results").html("");
	});

	function checkNumber (userChoice){
		for (i=1; i<(userChoice +1); i++) {
				if((i%3) + (i%5) === 0){
					$("#results").append("FizzBuzz"+"<br/>");
				}
				
				else if (i%3 === 0){
					$("#results").append("Fizz"+"<br/>");
				}

				else if (i%5 === 0){
					$("#results").append("Buzz"+"<br/>");
				}

				else {
					$("#results").append(i+"<br/>");
				}
			}
	}
})