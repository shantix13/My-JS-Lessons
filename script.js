// Способы перебора массивов

let new_arr = [3, 6, 9];

// for (let i = 0; i < new_arr.length; i++) {
//     console.log(new_arr[i]);
// }

// for (key in new_arr) {
//     console.log(new_arr[key]);
// }

// for (item of new_arr) {
//     console.log(item);
// }

// for of в массиве перебирает только значения. 
// Важное отличие от for in. Ключи в качестве значения.
// Лучше писать item

// Здесь мы получим HTML-collection. Это не совсем массив,
// Досутпны некоторые из свойств массива.
//
let all_p = document.getElementsByTagName('p');
// console.log(all_p);
// console.log(all_p.length);
// console.log(all_p[0]);

// for (let i = 0; i < all_p.length; i++) {
//     console.log(all_p[i]);
// }

// Не работает для html коллекции
// for (key in all_p) {
//     console.log(all_p[key]);
// }

// for (item of all_p) {
//     console.log(item); // Эта конструкция хорошо работает с коллекцией.
// }

let x_arr = document.querySelectorAll('p');
// получаем nodelist - еще одна сущность.

console.log(x_arr);

// for (let i = 0; i < x_arr.length; i++) {
//     console.log(x_arr[i]); // работает с nodelist нормально
// }

// for (let key in x_arr) {
//     console.log(x_arr[key]); // не работает с nodelist
// }

for (let item of x_arr) { // Хорошо подходит для перебора nodelist
    console.log(item);
}
