"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    // private stuid:number;
    // private stuName:string;
    // private marks:number;
    // in typescript only one constructor is allowed
    //No overloaded constructor in TypeScript
    function Student(stuid, stuname, marks) {
        this.stuid = stuid;
        this.stuname = stuname;
        this.marks = marks;
        // this.stuid=stuid;
        // this.stuname=stuname;
        // this.marks=marks;
    }
    Student.prototype.display = function () {
        console.log("Student Id = " + this.stuid);
        console.log("Student Id = " + this.stuname);
        console.log("Student Id = " + this.marks);
        console.log("================================");
    };
    return Student;
}());
exports.Student = Student;
