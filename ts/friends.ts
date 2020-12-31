class Friend{
    fname: string;
    email: string;
    phone: string;

    constructor (fname:string, email:string, phone:string) {
        this.fname = fname;
        this.email = email;
        this.phone = phone;
    }
    print(): void {
        console.log(`${this.fname} | ${this.email} | ${this.phone}`);

        //console.debug(`${this.fname} | ${this.email} | ${this.phone}`);
       
        
    }
}

let friends: Friend[] = [
    new Friend("Roe Kimmel", "monroekimmel@gmail.com", "513-254-9374"),
    new Friend("Emilie Nerl", "emilie.nerl1@gmail.com", "513-802-4103"),
    new Friend("Dana Kimmel", "danakimmel@zohomail.com", "513-301-3624"),
    new Friend("Dave Hoy", "hoyski@gmail.com", "513-322-8888"),
    new Friend("Nick Law", "nick@nicklaw.com", "513-417-0348"),
];

for(let Friend of friends) {
    Friend.print();
}