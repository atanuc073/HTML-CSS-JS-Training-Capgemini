"use strict";
exports.__esModule = true;
var NokiaN7_1 = require("./NokiaN7");
function display() {
    var obj = new NokiaN7_1.NokiaN7();
    obj.price = 17000;
    obj.campx = "50mp";
    console.log("price = " + obj.price + " and camera pixal =" + obj.campx);
    obj.doConverse();
    obj.captureVideo();
}
display();
