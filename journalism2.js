// var correct = getElementsByClassName('correct')
// var wrong = getElementsByClassName('wrong')

$("#questionOne").find('#correct').one('click', (function() {
		console.log("Correct clicked!");
		$("#next-question").show();
    $("#next-question").hide();
}

$("#questionOne").find('#wrong').one('click', (function() {
  	console.log("Wrong clicked!");
  	$("#try-again").show();
  			}
  	   )
  );

//$("#inner1").replaceWith("Answer correct!");
