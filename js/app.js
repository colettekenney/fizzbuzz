$(document).ready(function() {
	
	$("button#play").click(function() {

		var userChoice = +(document.getElementById('user-choice').value);
		

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
				
	});

	$("button#reset").click(function(){
		$("#results").html("");
	});


})