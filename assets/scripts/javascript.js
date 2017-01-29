$(document).ready(function() {
	
	
	var pomodoroTimeMinutes = 25
	var pomodoroTimeSeconds = 0;
	var interval = 0;

	function printTime(){
		$("#timer").html(pomodoroTimeMinutes + ":" + pomodoroTimeSeconds);
	}

	printTime();

	$("#plus-btn").click(function(event) {
		pomodoroTimeMinutes++;
		printTime();
	});	

	$("#minus-btn").click(function(event) {
		if(pomodoroTimeMinutes>0){
			pomodoroTimeMinutes--;
		}
		printTime();
	});

	$("#reset-btn").click(function(event) {
		clearInterval(interval);
		pomodoroTimeMinutes = 25;
		pomodoroTimeSeconds = 0;
		printTime();
	});




	$("#start-btn").click(function(event) {
		$("#plus-btn").attr('disabled', 'disabled');
		$("#minus-btn").attr('disabled', 'disabled');
		$("#done").html("")
		
		var timerEnd = new Date;
		timerEnd.setMinutes(timerEnd.getMinutes() + pomodoroTimeMinutes);
		timerEnd.setSeconds(timerEnd.getSeconds() + pomodoroTimeSeconds);

		interval = setInterval(checkTime, 100);
		console.log(interval);

		function checkTime(){
			var actualTime = new Date();
			var diff = new Date(timerEnd - actualTime);
			if (diff <= 1) {
				clearInterval(interval);
				$("#done").html("DONE!")
				pomodoroTimeMinutes = 25;
				pomodoroTimeSeconds = 00;
				return printTime();
			}
			pomodoroTimeMinutes = diff.getMinutes();
			pomodoroTimeSeconds = diff.getSeconds();
			console.log(diff.getMinutes() + ":" + diff.getSeconds());
			$("#timer").html(diff.getMinutes() + ":" + diff.getSeconds());
		}


	});

	$("#stop-btn").click(function(event) {
		clearInterval(interval);
		$("#plus-btn").removeAttr('disabled');
		$("#minus-btn").removeAttr('disabled');

	});

});