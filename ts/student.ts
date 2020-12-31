class Student {
    id: number;
    fname: string;
    favNumber: number;
    favColor: string;

    constructor(id: number, fname: string, favNumber: number, favColor: string) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }

    print(): void {
        //function inside a class does not need the word function
        console.log(`${this.id}|${this.fname}|${this.favNumber}|${this.favColor}`);
    }
}
//create instance of student


let students: Student[] = [
    new Student(1, "Ron", 7, "Pea Green"),
    new Student(2, "Chris", 43, "Red"),
    new Student(3, "Julie", 15, "Pink"),
    new Student(4, "Greg", 8, "Green"),
    new Student (5, "Sean", 13, "Blue")
    
];
    //shift + alt + downarrow = copies and pastes to the line below it
    for(let student of students) {
        student.print();
    }
    
