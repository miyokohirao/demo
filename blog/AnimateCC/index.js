(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 480,
	height: 240,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.off = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.on = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts_off
	this.instance = new lib.off();
	this.instance.setTransform(-30.5,-28);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(7));

	// parts_on
	this.instance_1 = new lib.on();
	this.instance_1.setTransform(-30.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},8).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-28,61,56);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer
	this.instance = new lib.symbol();
	this.instance.setTransform(43.4,68.4,1,1,0,0,0,-0.7,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:49.3,y:42.5},0).wait(1).to({x:54.6,y:42.9},0).wait(1).to({x:59.8,y:43.4},0).wait(1).to({x:65,y:44.2},0).wait(1).to({x:70.3,y:45.2},0).wait(1).to({x:75.5,y:46.5},0).wait(1).to({x:80.7,y:47.9},0).wait(1).to({x:85.9,y:49.6},0).wait(1).to({x:91.2,y:51.5},0).wait(1).to({x:96.4,y:53.7},0).wait(1).to({x:101.6,y:56},0).wait(1).to({x:106.9,y:58.6},0).wait(1).to({x:112.1,y:61.5},0).wait(1).to({x:117.3,y:64.5},0).wait(1).to({x:122.6,y:67.8},0).wait(1).to({x:127.8,y:71.3},0).wait(1).to({x:133,y:75},0).wait(1).to({x:138.2,y:78.9},0).wait(1).to({x:143.5,y:83.1},0).wait(1).to({x:148.7,y:87.5},0).wait(1).to({x:153.9,y:92.1},0).wait(1).to({x:159.2,y:97},0).wait(1).to({x:164.4,y:102.1},0).wait(1).to({x:169.6,y:107.4},0).wait(1).to({x:174.9,y:112.9},0).wait(1).to({x:180.1,y:118.7},0).wait(1).to({x:185.3,y:124.6},0).wait(1).to({x:190.6,y:130.8},0).wait(1).to({x:195.8,y:137.3},0).wait(1).to({x:201,y:143.9},0).wait(1).to({x:206.2,y:150.8},0).wait(1).to({x:211.5,y:157.9},0).wait(1).to({x:216.7,y:165.2},0).wait(1).to({x:221.9,y:172.8},0).wait(1).to({x:227.2,y:180.6},0).wait(1).to({scaleX:1.44,scaleY:0.73,x:232.7,y:195.5},0).wait(1).to({scaleX:1.5,scaleY:0.7,x:237.9,y:185.1},0).wait(1).to({scaleX:1.44,scaleY:0.73,x:243.1,y:174.3},0).wait(1).to({scaleX:1,scaleY:1,x:248.1,y:158.7},0).wait(1).to({x:253.3,y:151.4},0).wait(1).to({x:258.5,y:145.4},0).wait(1).to({x:263.8,y:140.8},0).wait(1).to({x:269,y:137.5},0).wait(1).to({x:274.2,y:135.5},0).wait(1).to({x:279.5,y:134.8},0).wait(1).to({x:284.7,y:135.5},0).wait(1).to({x:289.9,y:137.5},0).wait(1).to({x:295.2,y:140.8},0).wait(1).to({x:300.4,y:145.4},0).wait(1).to({x:305.6,y:151.4},0).wait(1).to({x:310.9,y:158.7},0).wait(1).to({x:316.1,y:167.4},0).wait(1).to({x:321.3,y:177.3},0).wait(1).to({scaleX:1.3,scaleY:0.8,x:326.7,y:193.8},0).wait(1).to({scaleX:1,scaleY:1,x:331.8,y:182.6},0).wait(1).to({x:337,y:177.6},0).wait(1).to({x:342.2,y:173.8},0).wait(1).to({x:347.5,y:171},0).wait(1).to({x:352.7,y:169.4},0).wait(1).to({x:357.9,y:168.8},0).wait(1).to({x:363.2,y:169.4},0).wait(1).to({x:368.4,y:171},0).wait(1).to({x:373.6,y:173.8},0).wait(1).to({x:378.8,y:177.6},0).wait(1).to({x:384.1,y:182.6},0).wait(1).to({x:389.3,y:188.6},0).wait(1).to({scaleX:1.2,scaleY:0.9,x:394.7,y:188},0).wait(1).to({scaleX:1,scaleY:1,x:399.8,y:183.1},0).wait(1).to({x:405,y:181.8},0).wait(1).to({x:410.2,y:181.3},0).wait(1).to({x:415.5,y:181.8},0).wait(1).to({x:420.7,y:183.1},0).wait(1).to({x:425.9,y:185.4},0).wait(1).to({x:431.2,y:188.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(253.6,134.4,61,56);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;