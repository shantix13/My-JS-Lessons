let a = 5;

a *= 2;


// Здесь происходит остановка скрипта из-за ошибки.
//document.querySelector('.test').innerHTML = a;

try { // попытка выполнить блок кода
    document.querySelector('.test').innerHTML = a;
}

catch (err) {
    // Этот блок выполнится, несмотря на ошибку. Если ошибки не будет, catch будет пропущен.
    console.log(err);
    console.log('1');
}

finally {
    // Этот блок выполнится гарантированно в независимости от того, будет ли ошибка или нет.
    console.log('Hello');
}

console.log(a);

function t1() {
    console.log(a);
}