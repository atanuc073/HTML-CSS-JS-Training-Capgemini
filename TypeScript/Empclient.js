"use strict";
exports.__esModule = true;
var Contract_1 = require("./Contract");
var Onroll_1 = require("./Onroll");
function empClient() {
    var arr = new Array(2);
    arr[0] = new Onroll_1.Onroll(1001, "atanu", 500000);
    arr[1] = new Contract_1.Contract(1002, "sayan", 2000, 15);
    display(arr);
}
function display(emps) {
    emps.forEach(function (e) { return e.display(); });
}
empClient();
