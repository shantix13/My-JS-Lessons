// Создаем новый сет (Set состоит из уникальных элементов)

let this_set = new Set();
// Добавим значение  в набор

this_set.add(1);
this_set.add(2);
this_set.add('1');
this_set.add('hello');

// Длина сета - не забывае - это свойство.
console.log(this_set.size);

// Очищаем сет
// console.log(this_set.clear());

// Удалить элемент из сета
this_set.delete('hello');

// Проверить наличие элемента
console.log(this_set.has(2)); // true or false

// Перебрать set
for (let item of this_set) {
    console.log(item);
}


// Set на практике. Преобразуем все значения массива в уникальные (удаляем
// дубли).

let arr = [1, 2, 3, 2, 3, 5, 'Hello'];
let new_arr = new Set(arr);
console.log(new_arr);
console.log(new_arr.size);

// Преобразовать set в массив

let new_arr_set = Array.from(new_arr);
console.log(new_arr_set);