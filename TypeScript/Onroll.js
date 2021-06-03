"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Onroll = void 0;
var Emp_1 = require("./Emp");
var Onroll = /** @class */ (function (_super) {
    __extends(Onroll, _super);
    function Onroll(eid, ename, salary) {
        var _this = _super.call(this, eid, ename, salary) || this;
        _this.da = _this.getSalary() * 0.4;
        _this.pf = _this.getSalary() * 0.12;
        return _this;
    }
    Onroll.prototype.calcSal = function () {
        return this.getSalary() + this.pf + this.da;
    };
    Onroll.prototype.display = function () {
        console.log("EID: " + this.getEid() + " ,\n        EName : " + this.getName() + " ,\n        Salary : " + this.getSalary() + " ,\n        DA : " + this.da + " ,\n        PF : " + this.pf + ",\n        Days : na ,\n        NetSalary : " + this.calcSal());
        console.log("--------------------------------------------------------");
    };
    return Onroll;
}(Emp_1.Emp));
exports.Onroll = Onroll;
