// localStorage.setItem('data', 560);
// let store = localStorage.getItem('data');
// console.log(store);

const arr_storage = [3, 4, 5];

localStorage.setItem('my_arr', arr_storage);

let new_arr = localStorage.getItem('my_arr');

console.log(new_arr);

// При получении массива из localStorage массив преобразуется в строку. Для получени массива надо использовать JSON