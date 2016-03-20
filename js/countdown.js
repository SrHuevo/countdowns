function Countdown() {
	
	var date = new Date();	
	
	var refreshCountdown = function() {
		var time = date - new Date();
		var dias = Math.floor(time / 3600000 / 24);
		if(dias >= 1){
			if($("#dias").html() != dias){
				$("#dias").html(dias);
			}
			time -= dias * 3600000 * 24;
		} else {
			if($("#dias").html() != '0'){
				$("#dias").html(0);
			}
		}
		if(dias == 1) {
			if($("#dias-text").html() !== "dia"){
				$("#dias-text").html("dia");
			}
		}else{
			if($("#dias-text").html() !== "dias"){
				$("#dias-text").html("dias");
			}
		}
		var horas = Math.floor(time / 3600000);
		if(horas >= 1){
			if($("#horas").html() != horas){
				$("#horas").html(horas);
			}
			time -= horas * 3600000;
		} else {
			if($("#horas").html() != '0'){
				$("#horas").html(0);
			}
		}
		if(horas == 1) {
			if($("#horas-text").html() !== "hora"){
				$("#horas-text").html("hora");
			}
		}else{
			if($("#horas-text").html() !== "horas"){
				$("#horas-text").html("horas");
			}
		}
		var minutos = Math.floor(time / 60000);
		if(minutos >= 1){
			if($("#minutos").html() != minutos){
				$("#minutos").html(minutos);
			}
			time -= minutos * 60000;
		} else {
			if($("#minutos").html != '0'){
				$("#minutos").html(0);
			}
		}
		if(minutos == 1) {
			if($("#minutos-text").html() !== "minuto"){
				$("#minutos-text").html("minuto");
			}
		}else{
			if($("#minutos-text").html() !== "minutos"){
				$("#minutos-text").html("minutos");
			}
		}
		var segundos = Math.floor(time / 1000);
		if(segundos >= 1){
			if($("#segundos").html() != segundos){
				$("#segundos").html(segundos);
			}
			time -= segundos * 1000;
		} else {
			if($("#segundos").html() != '0'){
				$("#segundos").html(0);
			}
		}
		var milis = "";
		if(time<10) milis="00"+time;
		else if(time<100) milis="0"+time;
		else milis = time;
		$("#milisegundos").html(milis);
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