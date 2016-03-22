$(document).ready(function() {
	$("button").click(function() {
		for (i=1; i<31; i++) 
			if((i%3) + (i%5) === 0){
			$("body").append("FizzBuzz"+"<br/>");
			}
			
			else if (i%3 === 0){
			$("body").append("Fizz"+"<br/>");
			}

			else if (i%5 === 0){
			$("body").append("Buzz"+"<br/>");
			}

			else {
			$("body").append(i+"<br/>");
		}
				
	})





})