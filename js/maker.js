function Maker($pageTitle, $title, $subtitle, $img, $calendar, $url, callback){
	if(!($pageTitle && $title && $subtitle && $img && $calendar && $url)){
		cosole.error("ERROR: Falta inicializar la funcion countdown");
		return;
	}

	this.$pageTitle = $pageTitle;
	this.$title = $title;
	this.$subtitle = $subtitle;
	this.$img = $img;
	this.$calendar = $calendar;
	this.$url = $url;

	var that  = this;

	this.change(callback, window.location.href);

	var keyupFn = function($input, url) {
		$input.keyup(function (){
			that.change(callback, url);
		});
	}

	keyupFn(this.$pageTitle);
	keyupFn(this.$title);
	keyupFn(this.$subtitle);
	keyupFn(this.$img);
	keyupFn(this.$url, this.$url.val());

	this.$calendar.on('change dp.change', function(e){
		that.change(callback);
	});
}

Maker.prototype.change = function(callback, url) {
	if(url){
		var urlVars = URL.getUrlVars(url);
		if(urlVars){
			this.$pageTitle.val(urlVars.pageTitle);
			this.$title.val(urlVars.title);
			this.$subtitle.val(urlVars.subtitle);
			this.$img.val(urlVars.img);
			this.$calendar.data().DateTimePicker.date(urlVars.calendar);
			this.$calendar.data().DateTimePicker.viewMode("days");
			this.$url.val(url);
		}
	} else {
		var url = URL.getPath(window.location.href) + "?";
		url += "pageTitle"+ "=" + this.$pageTitle.val();
		url += "&" + "title" + "=" + this.$title.val();
		url += "&" + "subtitle" + "=" + this.$subtitle.val();
		url += "&" + "img" + "=" + this.$img.val();
		url += "&" + "calendar" + "=" + this.$calendar.data().date;
		this.$url.val(url);
	}
	
	if(callback instanceof Function) {
		callback({
			pageTitle: this.$pageTitle.val(),
			title: this.$title.val(),
			subtitle: this.$subtitle.val(),
			img: this.$img.val(),
			calendar: this.$calendar.data().date
		});
	}
}