console.log('start');

console.log('start2');

// setTimeout - не входит в спецификацию JS, в действительности вызывается браузером у глобального объекта window.

window.setTimeout(function () {
    console.log('Inside timeout, after 2000 seconds');
}, 2000);

// Event Loop - концепт. Когда браузер видит settimeout - он закидывает эту конструкцию в стек.
//  Работает с event listener, ajax и любой асинхронностью. 