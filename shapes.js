exports.Shape = function(name, color) {
    this.shapeName = name;
    this.shapeColor = color;
};

exports.Shape.prototype.getColor = function(){
    return this.shapeColor;
};

exports.Shape.prototype.getName = function(){
    return this.shapeColor;
};




exports.Shape2d = function(name, color){
    this.shapeName = name;
    this.shapeColor = color;
};
//Voodoo Magic to make Shape2d inherit from Shape
exports.Shape2d.prototype = Object.create(exports.Shape.prototype)

exports.Shape2d.prototype.getColor = function(){
    return this.shapeColor;
};

exports.Shape2d.prototype.getName = function(){
    return this.shapeColor;
};




exports.Circle = function(name, color, radius){
    this.circleName = name;
    this.shapeColor = color;
    this.circleRadius = radius;
};

exports.Circle.prototype = Object.create(exports.Shape2d.prototype);

exports.Circle.prototype.getRadius = function(){
    return this.circleRadius;
};

exports.Circle.prototype.getDiameter = function(){
    return (this.circleRadius * 2);
};

// ACTUALLY CIRCUMFERENCE 
exports.Circle.prototype.getArea = function(){
    return (2 * Math.PI * this.circleRadius);
};




exports.Shape3d = function(){
	
};
//Voodoo Magic to make Shape3d inherit from Shape
exports.Shape3d.prototype = Object.create(exports.Shape.prototype);




exports.Cube = function(name, color, radius){
    this.cubeName = name;
    this.shapeColor = color;
    this.cubeRadius = radius;
};
//Voodoo Magic to make Cube inherit from Shape3d
exports.Cube.prototype = Object.create(exports.Shape3d.prototype)

exports.Cube.prototype.getVolume = function(){
    return (this.cubeRadius * this.cubeRadius * this.cubeRadius);
};





