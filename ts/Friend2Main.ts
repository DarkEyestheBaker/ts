import {Friend2} from './Friend2'  // dot means current folder - 
// don't need the dot js (.js) at end of file name

let friends2: Friend2[] = [
    new Friend2("Roe Kimmel", "monroekimmel@gmail.com", "513-254-9374"),
    new Friend2("Emilie Nerl", "emilie.nerl1@gmail.com", "513-802-4103"),
    new Friend2("Dana Kimmel", "danakimmel@zohomail.com", "513-301-3624"),
    new Friend2("Dave Hoy", "hoyski@gmail.com", "513-322-8888"),
    new Friend2("Nick Law", "nick@nicklaw.com", "513-417-0348")
];

friends2.push(new Friend2("Rick", "555-555-1212", "rick@gmail.com"));

    for (let Friend2 of friends2) {
        Friend2.print();
    }
    console.log();
    console.log("Done.");
