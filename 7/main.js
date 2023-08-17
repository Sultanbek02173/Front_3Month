class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    print() {
        console.log(this.name, this.surname);
    }
}

let person = new Person("Sultan", "Bekjanov");

person.print()






class User extends Person {

    #password;

    constructor(name, surname, password) {
        super(name, surname);
        this.#password = password;
    }

    print() {
        console.log(this.name, this.surname, this.#password);
    }
}

let user = new User("Mails", "Maikl", 12121);

user.print()
