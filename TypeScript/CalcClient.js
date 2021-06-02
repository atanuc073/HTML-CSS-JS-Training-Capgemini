"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
function display() {
    var obj = new Calculator_1.Calculator();
    obj.amt = 500;
    obj.years = 2;
    obj.rate = 2.5;
    console.log("simple interest = " + obj.calcSimple());
    console.log("Compound Interest = " + obj.calcCompound());
}
//tsc--:>TypeScript compiler
display();
