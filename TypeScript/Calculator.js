"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // default all are public specifier
    Calculator.prototype.calcSimple = function () {
        return (this.amt * this.rate * this.years / 100);
    };
    Calculator.prototype.calcCompound = function () {
        return this.amt * Math.pow((1 + this.rate / 100.0), this.years) - this.amt;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
