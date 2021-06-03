"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calcArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.clacPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
