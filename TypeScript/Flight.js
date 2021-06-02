"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight() {
        this.maxage = 100;
    }
    Flight.prototype.fly = function () {
        console.log("Flight");
        console.log(this.maxage);
    };
    return Flight;
}());
exports.Flight = Flight;
