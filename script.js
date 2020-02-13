const associate_arr = {}; // инициализируем массив

let associate_arr_2 = {
    'a': 5,
    'b': 'Hello',
    'z2': 'Hi'
}

// Ключ: значение 
// Добавим элемент массива
associate_arr_2.yyy = 555;
associate_arr_2.z2 = 444;
delete associate_arr_2.b;
delete associate_arr_2['a'];
console.log(associate_arr_2);
//console.log(associate_arr_2.z2);

// Если имя переменной, то лучше писать так
// let k = 'z2';
// console.log(associate_arr_2[k]);

// цикл for in для ассоциативных массивов
let out = '';
for (let key in associate_arr_2) {
    out += associate_arr_2[key];
}

document.querySelector('.out').innerHTML = out;