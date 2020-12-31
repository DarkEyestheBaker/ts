"use strict";
var Student = /** @class */ (function () {
    function Student(id, fname, favNumber, favColor) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }
    Student.prototype.print = function () {
        //function inside a class does not need the word function
        console.log(this.id + "|" + this.fname + "|" + this.favNumber + "|" + this.favColor);
    };
    return Student;
}());
//create instance of student
var students = [
    new Student(1, "Ron", 7, "Pea Green"),
    new Student(2, "Chris", 43, "Red"),
    new Student(3, "Julie", 15, "Pink"),
    new Student(4, "Greg", 8, "Green"),
    new Student(5, "Sean", 13, "Blue")
];
//shift + alt + downarrow = copies and pastes to the line below it
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    student.print();
}
