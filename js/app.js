$(document).ready(function() {
	
	$('form').submit(function(e) {
		e.preventDefault();
		var userChoice = +($('#user-choice').val());
		//console.log(userChoice);
		playFizzBuzz(userChoice);
	});

	$("#reset").click(function(){
		$("#results").html("");
		$("#user-choice").val("1");
	});

	function playFizzBuzz(userChoice){
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
});