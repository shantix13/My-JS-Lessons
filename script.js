class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(this.name + 'Hello');
        return this.name;
    }
}


const alex = new User('Alex');
console.log(alex);

class Person extends User {
    constructor(name, email) {
        super(name);  // super надо вызывать всегда, если есть extends. Super обращается к родителю.
        super.sayHello();
        this.name = name;
        this.email = email;
    }

    sayHello() {
        console.log(this.email);
        //return super.sayHello();
    }
}

const li = new Person('Jora', 'li@email.ua');
//console.log(li.sayHello());

console.log(li.sayHello());
