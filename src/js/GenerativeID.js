/*

	pixel-fiend generative id

	variables 
	- time of day
	- bitcoin volatility
	- weather

*/
define(function(require){

	// https://github.com/josephg/noisejs
	var noise = require('bower/noisejs/perlin');

	var GenerativeID = function(container){

		var canvas = ox.create('canvas');
		canvas.width = canvas.height = 400;
		container.appendChild(canvas);

		this.render = function(){
		}

		ox.FrameImpulse.on('frame', this.render);
		ox.FrameImpulse.start();
	};

	return GenerativeID;
});