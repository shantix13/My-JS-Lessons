let namer = 'Ivan';
let age = '37';
let zodiak = 'Oven';

let my_array = ['Ivan', 37, 'Oven'];

// Create Empty Array(Alter Notation)
let new_array = [];

console.log(my_array[0]);


console.log(my_array[5]);
// Будет undefined - обращение к несуществующему элементу.

// Длина массиваы
console.log(my_array.length);

// Присвоение значения элементу массива
my_array[0] = 'Anton';


// Простой способ поменять элементы местами.
let num_array = [1, 2, 3, 4];
console.log(num_array);
let first_num = num_array[0];

num_array[0] = num_array[3];
num_array[3] = first_num;

console.log(num_array);
// Перебираем массив
// for (let i = 0; i < num_array.length; i++) {
//     document.querySelector('.out1').innerHTML += num_array[i];
// }


// Second variant to display array
let out_array = '';

for (let i = 0; i < num_array.length; i++) {
    out_array += num_array[i];
}
document.querySelector('.out1').innerHTML = out_array;

// Находим самое большое и самое маленькое число из массива и сумму массива
let big_array = [4, 2, 5, 23, 43, 1, 2, 6, 12];

let max = big_array[0];
let min = big_array[0];

for (let i = 0; i < big_array.length; i++) {
    if (big_array[i] > max) {
        max = big_array[i];
    }

    if (big_array[i] < min) {
        min = big_array[i];
    }
}

console.log('max: ' + max + ' min: ' + min);

let suma = 0;
for (let i = 0; i < big_array.length; i++) {
    suma += big_array[i];
}


console.log('Сумма: ' + suma);

