// метод позволяет создавать новый объект
// принимает 2 параметра в виде объектов. Первый - является прототипом для данного объекта, второй принимает поля объекта.
const person = Object.create(
    {
        calculateAge() {
            console.log('Age', new Date().getFullYear() - this.birthYear);
        }
    }, {
    name: {
        value: 'Vladilen',
        enumerable: true,   // это property descriptor, по-умолчанию false. Если поставим true - совйство бдет перебираемым
        writable: true,  // по-умолчанию - false. При true можно изменять значение поля этого объекта.
        configurable: true // по-умолчанию - false. При true мы можем удалять это поле объекта.
    },
    birthYear: {
        value: 1945
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            document.body.background = 'red';
            console.log('Set age', value);
        }
    }
});

// поля, объявленные через value не будут входить в цикл при иттерации.
console.log(person.age);

person.name = 'Maxim'; // Поля через object.create() нельзя изменять по умолчанию. Нужно использовать property descriptor - writable 

// console.log(person);


// for in выводит ключи for of выводит значения
for (let key in person) {
    console.log(key); // Здесь мы ничего не получим, потому что значения объекта были объявлены через Object.create() value.
    // Нужно использовать property descriptors
}

