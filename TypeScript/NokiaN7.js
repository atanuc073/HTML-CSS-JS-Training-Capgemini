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
exports.NokiaN7 = void 0;
var Nokia1100_1 = require("./Nokia1100");
var NokiaN7 = /** @class */ (function (_super) {
    __extends(NokiaN7, _super);
    function NokiaN7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NokiaN7.prototype.captureVideo = function () {
        console.log("Capture Video");
    };
    return NokiaN7;
}(Nokia1100_1.Nokia1100));
exports.NokiaN7 = NokiaN7;
