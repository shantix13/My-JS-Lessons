// let this_str = 'Hello, mama, go, home';
// // split разбивает строку на массив по сепаратору.
// console.log(this_str.split(', '));

// // join собирает строку из массива. Обратен split
// // сепаратор по умолчанию запятая.
// let j_arr = ['Привет', 'друган', 'и кореш!']
// console.log(j_arr.join(' '));

// метод forEach производит действия с каждым элементом массива
// аналогичен each в jquery

let num_arr = [2, 10, 23, 45, 65, 67];

let new_num_arr = num_arr.forEach(function (elem, index) {
    //console.log(index);
    elem *= 2;
    //console.log('--');
})

console.log(new_num_arr);