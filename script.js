const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');


//b1.onclick = test;

function test(color, num) {
    console.log(num);
    this.style.background = color;
}

//test();

// метод call();

// function.call(context, [arg1, arg2, arg3....])


//test.call(b1); // сразу вызвал функцию - this = b1

// b2.onclick = function () {
//     test.call(b1, 'green');
// }


// apply
// b2.onclick = function () {
//     test.apply(b1, ['green', 555]);
// }

// bind

let a = test.bind(b1, 'orange', 6666);
let b = test.bind(b2, 'green', 8888);

b2.onclick = a;
b1.onclick = b;

