const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('greet!');
    }
});

person.greet();

Object.prototype.sayHello = function () {
    console.log('Say Hello!');
};

const lena = Object.create(person);

lena.sayHello();
lena.greet();

lena.name = 'Elena';

const str = new String('I am String!');
console.log(str);
