class User {
    constructor() {
        //   this._name = name; // Это соглашение по защищенному свойству.(нижнее подчеркивание). Изменить можно, но это считается недопустимым.
    }

    #test = 'Hohoho!';   // Это соглашение по приватному объявлению свойства!

    set name(name) {

        console.log('Privat = ' + this.#test);
        this._name = name.trim().toLowerCase();
    }

    get name() {
        return this._name;
    }

    one() {
        console.log(this.#test);
    }


}


const student = new User('Alex');
student._name = '    Ivan   ';
//student.get('   Ivan');
//console.log(student.name);
//console.log(student.#test);   // ошибка!
console.log(student);


class User2 extends User { };

const student2 = new User2();

student2.name = 'Oleg';