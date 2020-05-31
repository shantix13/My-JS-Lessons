let arr = [];

let b = [1, 3, 8, 10];

console.log(b[2]);

console.log(b.length);

let c = [3, 'hello', true];

// create new element


// rewrite element
c[2] = 999;
c[5] = 87;

console.log(c.length); // equal 6

// delete element c - becomes empty
delete c[5];

// Добавляет элемент в конец массива
//с.push('Hello');
//с.push(65);


// Удаляет последний элемент массива
c.pop();

// еще один удаляем
// Возвращает удаленный элемент
let popper = c.pop();

// push pop - быстрые методы;

// shift unshift - добавляет - удаляет элементы массива.
// могут серьезно замедлить расчет
c.shift(); // удаляет
c.unshift() // добавляет 

let d = 'Hi, my, name, Ivan';

// Из строки делает массив
let e = d.split(', ');
// Наоборот из строки массив
//let f = e.join('-');

// метод slice создает новый массив, в котороый копирует прошлый с определенным в параметрам метода наборе элементов
// slice(1[index of first element], 3[number of elements]);
let g = e.slice(1, 4);

// Деструктуризация массива

let z = [3, 6, 9, 12];

let [j, k, l] = z; // разбирает массив на переменные

console.log(j);


// метод map(function(currentValue, index, array){
// return tralala; Всегда надо писать return. Это обязательно.
//});
// перебирает массив, производит над ним действия и пересобирает. не создает копию массива.
// Не срабатывает на пустых и удаленных элементах
let arrayx = [1, 2, 3, 5, 8];


arrayx = arrayx.map(function (val, ind) {
    return val * 4;

});

console.log(arrayx);

// метод filter() - перебирает элементы массива и оставляет те, кторые подходят под условие. Фильтрует вхождения внутрь массива.
// let c = a.filter(function(val, index, array){
//   return tralal; return - обязателен. Здесь проверяем - элемент x > 3 например.
//});

let arrayy = [1, 2, -3, 5, -8];

arrayy = arrayy.filter(function (val) {
    return val > 0;
});

console.log(arrayy);

// методы  some и every 

let xarr = [3, 6, 7, 9];

// метод every() пименяет функцию к каждому элементу массива.
// отличие от filter() - возвращает либо true либо false в любом случае, если одно из условий по пути итераций будет false, то every заканчивает
// свое движение и возвращает false
let zarr = xarr.every(function (value) { value > 0 });
console.log(zarr);

// метод some() - тоже самое, но если хоть один элемент будет true, то вернет true.
let rarr = xarr.every(function (value) { value < 5 });
console.log(rarr);

// метод reduce() также производит действие над массивом, возвращая промежуточный результат. Называется свертыванием массива. Свертка массива.


let darr = xarr.reduce(function (accum, currentValue, index) {
    // prevValue - первое значение массива. Всегда остается им и не меняется.
    // currentValue - значение, которое меняется с каждой итерацией, не считая первый Сам prevValue. В данном случае - 6, 7, 9
    // сумма элементов
    prevValue + currentValue;
    // index - номер элемента в массиве.
});

// метод reduceRight() - делает тоже самое только в другую сторону массива, начиная с конца.

let garr = xarr.reduceRight(function (accum, currentValue, indexZ) {
    prevValue + currentValue;
});
