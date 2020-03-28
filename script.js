class User {
    static address = 'true';


    constructor() {
        this.name = name;
    }

    static getRole(email) {  // Статический метод используется без создания экземпляра класса.
        return 'student';
    }

    static getId(email) {
        return 'Id';
    }

    static getUser(id) {
        return 'user_fields';
    }
}

const person = new User('Alex');
console.log(person);

console.log(User.getRole('alex@ex')); // при помощи static можно обращаться к классу напрямую без создания объекта.


class Student extends User {
    constructor(name) {
        super(name);
    }


}

console.log(Student.getRole('test')); // Статические методы наследуются