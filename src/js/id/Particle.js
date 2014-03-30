/*

	Particle interface. Particle accepts Behaviors that determine what it will do. 
	Behaviors should control drawing and positioning.
	Multiple behaviors can be applied, even if they duplicate functionality, or conflict.
	Behaviors are applied in the order they are added.

*/


define(function(require){

	var Particle = function(){

		this.position = [0, 0];
		this.vector = [0, 0];
		this.behaviors = [];

	};

	Particle.prototype = {

	};

	return Particle;

});