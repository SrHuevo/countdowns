function Countdown() {
	
	var date = new Date();	
	
	var refreshCountdown = function() {
		var time = date - new Date();
		var dias = Math.floor(time / 3600000 / 24);
		if(dias >= 1){
			$("#dias").html(dias);
			if(dias == 1) {
				$("#dias-text").html("dia");
			}else{
				$("#dias-text").html("dias");
			}
			time -= dias * 3600000 * 24;
		} else {
			$("#dias").html(0);
		}
		var horas = Math.floor(time / 3600000);
		if(horas >= 1){
			$("#horas").html(horas);
			if(dias == 1) {
				$("#horas-text").html("hora");
			}else{
				$("#horas-text").html("horas");
			}
			time -= horas * 3600000;
		} else {
			$("#horas").html(0);
		}
		var minutos = Math.floor(time / 60000);
		if(minutos >= 1){
			$("#minutos").html(minutos);
			if(dias == 1) {
				$("#minutos-text").html("minuto");
			}else{
				$("#minutos-text").html("minutos");
			}
			time -= minutos * 60000;
		} else {
			$("#minutos").html(0);
		}
		var segundos = Math.floor(time / 1000);
		if(segundos >= 1){
			$("#segundos").html(segundos);
			time -= segundos * 1000;
		} else {
			$("#segundos").html(0);
		}
		$("#milisegundos").html(time);
	}

	this.setDate = function(calendar) {
		clearInterval(refreshCountdown);

		date = new Date();

		date.setYear(calendar.substr(0,4));
		date.setMonth(parseInt(calendar.substr(4,2)) - 1);
		date.setDate(calendar.substr(6,2));
		date.setHours(calendar.substr(8,2));
		date.setMinutes(calendar.substr(10,2));
		date.setSeconds(calendar.substr(12,2));

		setInterval(refreshCountdown, 53);
	}
}