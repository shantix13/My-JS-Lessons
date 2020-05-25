let a = 9;
let b = 3;

console.log(a * b);
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b); // остаток от деления

// a и b - операторы. * + - / % - операнды. 

// Оператор сравнения

console.log(a > b); // возвращает буль
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a != b);
console.log(a == b);
console.log(a === b);
console.log(a !== b);

//один знак равно - это присвоение

let c = 'Hello';

console.log(c * a);
// Даст NAN

console.log(c + a);
// + (конкатенация) - допускается

// Преобразование строк в число

let xc = +'8';
console.log(typeof xc);

let cx = parseInt('8');
console.log(typeof cx);

let cv = Number(8);
console.log(typeof cv);

// Преобразование чисел в строки

let cn = 8 + '';
console.log(typeof cn);

let cm = String(10);

console.log(typeof cm);

// isNaN - проверяет, является ли значение числом.

console.log(isNaN(cm));

