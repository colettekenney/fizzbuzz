$(document).ready(function() {
	$("button#play").click(function() {

		for (i=1; i<31; i++) {
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