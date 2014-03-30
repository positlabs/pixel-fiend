define(function(require){

	var GID = require('id/GenerativeID');

	window.app = {
		init:function(){

			var mainEl = ox('#main');
			new GID(mainEl);

		}
	};

	return app;
});