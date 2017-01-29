$(document).ready(function() {
	

	
	var pomodoroTimeMinutes = 0
	var pomodoroTimeSeconds = 20;

	$("#start-btn").click(function(event) {
		var timerEnd = new Date;
		timerEnd.setMinutes(timerEnd.getMinutes() + pomodoroTimeMinutes);
		timerEnd.setSeconds(timerEnd.getSeconds() + pomodoroTimeSeconds);

		var interval = setInterval(checkTime, 100);

		function checkTime(){
			var actualTime = new Date();
			var diff = new Date(timerEnd - actualTime);
			if (diff <= 0) {
				clearInterval(interval);
			}
			console.log(diff.getMinutes() + ":" + diff.getSeconds());
			$("#timer").html(diff.getMinutes() + ":" + diff.getSeconds());
		}


	});

	$("#stop-btn").click(function(event) {
		clearInterval(interval);
	});

});