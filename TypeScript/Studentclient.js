"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
function studentclient() {
    var arr = new Array(4);
    arr[0] = new Student_1.Student(1001, "sam", 96);
    arr[1] = new Student_1.Student(1002, "anand", 60);
    arr[2] = new Student_1.Student(1003, "riju", 56);
    arr[3] = new Student_1.Student(1004, "mohit", 88);
    arr.sort(function (a, b) { return a.marks - b.marks; }).forEach(function (e) { return e.display(); });
    // let obj:Student=new Student(1001,"atanu",98);
    // obj.display()
}
studentclient();
