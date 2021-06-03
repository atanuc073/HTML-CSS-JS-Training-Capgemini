"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function circleClient() {
    var cir = new Circle_1.Circle(12);
    console.log("This Area of the circle with radius " + cir.radius + " is " + cir.calcArea().toFixed(2));
    console.log("This Perimeter of the circle with radius " + cir.radius + " is " + cir.clacPerimeter().toFixed(2));
}
circleClient();
