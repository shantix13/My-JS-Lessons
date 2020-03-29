const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');


//b1.onclick = test;

function test(color, numbx) {
    console.log(numbx)
    this.style.background = color;
}

// test();

// Call вызывает функцию с опеределенно направленным контекстом.

// function.call(context, arg1, arg2, arg3){

// }

// test.call(b1);  // вызвал функцию b1  this = b1


b2.onclick = function () {
    test.call(b1, 'red', 5555);
}

// Apply - делает тоже самое, только списком аргументов через массив.


b2.onclick = function () {
    test.apply(b1, ['green', '5555']);
}


// Bind создает экземпляры одной функции с разным контекстом.