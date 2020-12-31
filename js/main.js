"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend2_1 = require("./Friend2"); // dot means current folder - 
// don't need the dot js (.js) at end of file name
var friends2 = [
    new Friend2_1.Friend2("Roe Kimmel", "monroekimmel@gmail.com", "513-254-9374"),
    new Friend2_1.Friend2("Emilie Nerl", "emilie.nerl1@gmail.com", "513-802-4103"),
    new Friend2_1.Friend2("Dana Kimmel", "danakimmel@zohomail.com", "513-301-3624"),
    new Friend2_1.Friend2("Dave Hoy", "hoyski@gmail.com", "513-322-8888"),
    new Friend2_1.Friend2("Nick Law", "nick@nicklaw.com", "513-417-0348")
];
friends2.push(new Friend2_1.Friend2("Rick", "555-555-1212", "rick@gmail.com"));
for (var _i = 0, friends2_1 = friends2; _i < friends2_1.length; _i++) {
    var Friend2_2 = friends2_1[_i];
    Friend2_2.print();
}
console.log();
console.log("Done.");
