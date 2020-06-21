// Bind позволяет управлять вызовом контекста. Например, вызвать глобальны объект window.
// To bind привязывать.
function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Shantix',
    age: 35,
    sayHello: hello,
    //sayHelloWindow: hello.bind(window),
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

person.sayHello();
person.logInfo();

const lena = {
    name: 'Elena',
    age: 23
}
// Передали новый контекст Лена в метод из другого объекта.
//person.logInfo.bind(lena)();

const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '899999999')();
//fnLenaInfoLog();

// call передает новый контекст как bind и сразу вызывает функцию.

person.logInfo.call(lena, 'Frontend', '899999999');

// apply - тоже самое, что call, но передается только 2 параметра. Если во втором параметре несколько
// значений, то они передаются в массиве.

person.logInfo.apply(lena, ['Frontend', '899999999']);

// 