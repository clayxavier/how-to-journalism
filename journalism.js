//Initial state

$(document).ready(function() {
	$("#questionTwo,#questionThree,#questionFour,#questionFive,#questionSix,#questionSeven,#questionEight").hide();

});


//Correct scripts

$("#questionOne").find('#correct').one( 'click', (function() {
		console.log("Correct clicked!");
		$("#questionOne").find("#wrong").hide();
		$("#inner1").append("Answer correct!");
		$("#questionTwo").show();
		$('html, body').animate({
	        scrollTop: $("#questionTwo").offset().top
	    }, 500);}
	    )
	);

$("#questionTwo").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#questionTwo").find("#wrong").hide();
	$("#inner2").append("Answer correct!");
	$("#questionThree").show();
	$('html, body').animate({
        scrollTop: $("#questionThree").offset().top
    }, 500);
}));

$("#questionThree").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#inner3").append("Answer correct!");
	$("#questionThree").find("#wrong").hide();
	$("#questionFour").show();
	$('html, body').animate({
        scrollTop: $("#questionFour").offset().top
    }, 500);
}));

$("#questionFour").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#questionFour").find("#wrong").hide();
	$("#inner4").append("Answer correct!");
	$("#questionFive").show();
	$('html, body').animate({
        scrollTop: $("#questionFive").offset().top
    }, 500);
}));

$("#questionFive").find('#correct').one( 'click', (function() {
	console.log("Correct clicked!");
	$("#questionFive").find("#wrong").hide();
	$("#inner5").append("Answer correct!");
	$("#questionSix").show();
	$('html, body').animate({
        scrollTop: $("#questionSix").offset().top
    }, 500);
}));

$("#questionSix").find('#correct').one ( 'click', (function() {
	console.log("Correct clicked!");
	$("#questionSix").find("#wrong").hide();
	$("#inner6").append("Answer correct!");
	$("#questionSeven").show();
	$('html, body').animate({
        scrollTop: $("#questionSeven").offset().top
    }, 500);
}));

$("#questionSeven").find('#correct').one ( 'click', (function() {
	console.log("Correct clicked!");
	$("#questionSeven").find("#wrong").hide();
	$("#inner7").append("Answer correct!");
	$("#questionEight").show();
	$('html, body').animate({
        scrollTop: $("#questionEight").offset().top
    }, 500);
}));

$("#questionEight").find('#correct').one ( 'click', (function() {
	console.log("Correct clicked!");
	$("#questionEight").find("#wrong").hide();
	$("#inner8").append("Answer correct!");
	$("#final").show();
	$('html, body').animate({
        scrollTop: $("#final").offset().top
    }, 500);
}));

//Incorrect scripts

$("#questionOne").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionOne").find("#correct").hide();
		$("#inner1").append("Wrong answer!");
		$("#questionTwo").show();
		$('html, body').animate({
	        scrollTop: $("#questionTwo").offset().top
	    }, 500);}
	    )
	);

$("#questionTwo").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionTwo").find("#correct").hide();
		$("#inner2").append("Wrong answer!");
		$("#questionThree").show();
		$('html, body').animate({
	        scrollTop: $("#questionThree").offset().top
	    }, 500);}
	    )
	);

$("#questionThree").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionThree").find("#correct").hide();
		$("#inner3").append("Wrong answer!");
		$("#questionFour").show();
		$('html, body').animate({
	        scrollTop: $("#questionFour").offset().top
	    }, 500);}
	    )
	);

$("#questionFour").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionFour").find("#correct").hide();
		$("#inner4").append("Wrong answer!");
		$("#questionFive").show();
		$('html, body').animate({
	        scrollTop: $("#questionFive").offset().top
	    }, 500);}
	    )
	);

$("#questionFive").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionFive").find("#correct").hide();
		$("#inner5").append("Wrong answer!");
		$("#questionSix").show();
		$('html, body').animate({
	        scrollTop: $("#questionSix").offset().top
	    }, 500);}
	    )
	);

$("#questionSix").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionSix").find("#correct").hide();
		$("#inner6").append("Wrong answer!");
		$("#questionSeven").show();
		$('html, body').animate({
	        scrollTop: $("#questionSeven").offset().top
	    }, 500);}
	    )
	);

$("#questionSeven").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionSeven").find("#correct").hide();
		$("#inner7").append("Wrong answer!");
		$("#questionEight").show();
		$('html, body').animate({
	        scrollTop: $("#questionEight").offset().top
	    }, 500);}
	    )
	);

$("#questionEight").find('#wrong').one( 'click', (function() {
		console.log("Wrong clicked!");
		$("#questionEight").find("#correct").hide();
		$("#inner8").append("Wrong answer!");
		$("#final").show();
		$('html, body').animate({
	        scrollTop: $("#final").offset().top
	    }, 500);}
	    )
	);