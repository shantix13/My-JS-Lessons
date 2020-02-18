let new_arr = [4, 5, 120, 230, 250, 270, 450];

// let map_arr = new_arr.map(function (item, index) {
//     //console.log(item); // получим все значения элементов массива
//     //return item // map должен возвращать из функции.

//     // console.log(index); // получим индексы массива.
//     // return index;

//     // умножим все элементы на 5
//     return item * 5;
// });

// console.log(map_arr);

// Можно написать так, если одна строчка, return можно не писать.

let map_arr = new_arr.map(item => item * 5);

console.log(map_arr);


// метод filter - пересобирает элементы, которые попадают под условия в
//новый массив.

let filter_arr = new_arr.filter(function (item, index) {
    if (item % 2 == 0) {
        return true;
    }
})

console.log(filter_arr);