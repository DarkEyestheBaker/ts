"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend2 = void 0;
var Friend2 = /** @class */ (function () {
    function Friend2(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    Friend2.prototype.print = function () {
        console.log(this.name + " | " + this.phone + " | " + this.email);
    };
    return Friend2;
}());
exports.Friend2 = Friend2;
