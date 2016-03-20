$(function () {
    $('#maker-calendario').datetimepicker({
        inline: true,
        sideBySide: true,
        viewMode: 'years',
        format: 'YYYYMMDDHHmmss'
    });

    if(window.location.href.indexOf("?") !== -1) {
    	$("#makecountdown").hide();
    }

    var countdown = new Countdown();

    var $makerpageTitle = $("#maker-pagetitle");
	var $makertitle = $("#maker-title");
	var $makersubtitle = $("#maker-subtitle");
	var $makerimg = $("#maker-img");
	var $makerurl = $("#maker-url");

	var $makercalendar = $("#maker-calendario");

    var change = function(fields) {
   	 	countdown.setDate(fields.calendar);
    	document.title = fields.pageTitle;
    	$("#titulo").html(fields.title);
    	$("#subtitulo").html(fields.subtitle);
    	$("#imagen-fondo").attr("src", fields.img);
    }

    var maker = new Maker($makerpageTitle, $makertitle, $makersubtitle, $makerimg, $makercalendar, $makerurl, change);

    $("#make-countdown").click(function(){
    	$("#makecountdown").show();
    	var $parent = $(this).parent();
    	this.remove();
    	var verResultado = $('<button class="btn btn-success">Ver Resultado</button>');
    	verResultado.click(function(){
    		window.location = $makerurl.val();
    	});
    	$parent.append(verResultado);
    });

});