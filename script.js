// простая именованная функция
let func1 = document.querySelector('.func1');
function one() {
    console.log('work');
}

// вызов функции
one();


func1.onclick = one;

// возвращаем значение для математических действий.
function two() {
    console.log('work zzzzz');
    return 54;
}

console.log(1 + two());


let a = 8;
let b = 9;

function multiply() {
    console.log(a * b);
    return a * b;
}

console.log(multiply() * 10);

// применяем параметры (добавляем параметры поумолчанию)

function three(с = 10, d = 5) {
    return с * d;
}

console.log(three(7, 10));
console.log(three(7, a));
console.log(three());

// анонимная функция
// func1.onclick = function () {
//     console.log('take_it');
//     console.log(three(4, 7));
// }

// Стрелочная функция
func1.onclick = () => {
    console.log('take_it');
    console.log(three(4, 7));
}

document.querySelector('.func2').onclick = function () {
    console.log('***********');
}


document.querySelector('.func2').onclick = () => {
    console.log('*********** + arrow');
}




