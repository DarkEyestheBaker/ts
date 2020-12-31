"use strict";
var Friend = /** @class */ (function () {
    function Friend(fname, email, phone) {
        this.fname = fname;
        this.email = email;
        this.phone = phone;
    }
    Friend.prototype.print = function () {
        console.log(this.fname + " | " + this.email + " | " + this.phone);
        //console.debug(`${this.fname} | ${this.email} | ${this.phone}`);
    };
    return Friend;
}());
var friends = [
    new Friend("Roe Kimmel", "monroekimmel@gmail.com", "513-254-9374"),
    new Friend("Emilie Nerl", "emilie.nerl1@gmail.com", "513-802-4103"),
    new Friend("Dana Kimmel", "danakimmel@zohomail.com", "513-301-3624"),
    new Friend("Dave Hoy", "hoyski@gmail.com", "513-322-8888"),
    new Friend("Nick Law", "nick@nicklaw.com", "513-417-0348"),
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var Friend_1 = friends_1[_i];
    Friend_1.print();
}
