//Initial state

$(document).ready(function() {
	$("#questionTwo,#questionThree,#questionFour,#questionFive,#questionSix,#questionSeven,#questionEight").hide();

});


//Correct scripts, determines if question was answered correctly

$("#questionOne").find('#correct').one( 'click', (function() {
		console.log("Correct clicked!");
		$("#inner1").replaceWith("Answer correct! ");
		$("#questionOne").find('#correct').css("background-color","#28a354");
		$("#questionTwo").show();
		$('html, body').animate({
	        scrollTop: $("#questionTwo").offset().top
	    }, 500);
				}
	    )
	);

$("#questionTwo").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner2").replaceWith("Answer correct! ");
	$("#questionTwo").find('#correct').css("background-color","#28a354");
	$("#questionThree").show();
	$('html, body').animate({
        scrollTop: $("#questionThree").offset().top
    }, 500);
}));

$("#questionThree").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner3").replaceWith("Answer correct! ");
	$("#questionThree").find('#correct').css("background-color","#28a354");
	$("#questionFour").show();
	$('html, body').animate({
        scrollTop: $("#questionFour").offset().top
    }, 500);
}));

$("#questionFour").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner4").replaceWith("Answer correct! ");
	$("#questionFour").find('#correct').css("background-color","#28a354");
	$("#questionFive").show();
	$('html, body').animate({
        scrollTop: $("#questionFive").offset().top
    }, 500);
}));

$("#questionFive").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner5").replaceWith("Answer correct! ");
	$("#questionFive").find('#correct').css("background-color","#28a354");
	$("#questionSix").show();
	$('html, body').animate({
        scrollTop: $("#questionSix").offset().top
    }, 500);
}));

$("#questionSix").find('#correct').one ( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner6").replaceWith("Answer correct! ");
	$("#questionSix").find('#correct').css("background-color","#28a354");
	$("#questionSeven").show();
	$('html, body').animate({
        scrollTop: $("#questionSeven").offset().top
    }, 500);
}));

$("#questionSeven").find('#correct').one ( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner7").replaceWith("Answer correct!" );
	$("#questionSeven").find('#correct').css("background-color","#28a354");
	$("#questionEight").show();
	$('html, body').animate({
        scrollTop: $("#questionEight").offset().top
    }, 500);
}));

$("#questionEight").find('#correct').one ( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner8").replaceWith("Answer correct! ");
	$("#questionEight").find('#correct').css("background-color","#28a354");
	$("#final").show();
	$('html, body').animate({
        scrollTop: $("#final").offset().top
    }, 500);
}));

//Incorrect scripts, determines if question was answered incorrectly

$("#questionOne").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner1").append("Wrong answer! ");
				}
	    )
	);

$("#questionTwo").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner2").append("Wrong answer! ");
				}
	    )
	);

$("#questionThree").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner3").append("Wrong answer! ");
				}
	    )
	);

$("#questionFour").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner4").append("Wrong answer! ");
				}
	    )
	);

$("#questionFive").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner5").append("Wrong answer! ");
				}
	    )
	);

$("#questionSix").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner6").append("Wrong answer! ");
				}
	    )
	);

$("#questionSeven").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner7").append("Wrong answer! ");
				}
	    )
	);

$("#questionEight").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#inner8").append("Wrong answer! ");
				}
	    )
	);
