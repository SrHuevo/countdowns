var URL = {
	getUrlVars: function(url){
		var map = {};
		var index = url.indexOf("?");
		if(index === -1) {
			return undefined;
		}
	    var hashes = url.substr(index + 1, url.length).split('&');
	    for(var i = 0; i < hashes.length; i++) {
	        hash = hashes[i].split('=');
	        map[hash[0]] = decodeURI(hash[1]);
	    }
		return map;
	},

	getPath: function(url){
		var index = url.indexOf("?");
		if(index == -1) {
			return  url;
		} else {
			return  url.substr(0, index);
		}
	}
}