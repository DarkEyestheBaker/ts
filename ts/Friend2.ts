export class Friend2 {
    name: string; 
    phone: string;
    email: string;

    constructor (name: string, phone: string, email: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;

    }
    print(): void {
        console.log(`${this.name} | ${this.phone} | ${this.email}`);
    }
}


  