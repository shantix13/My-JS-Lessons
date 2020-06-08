let a = [1, 2, 3, 4];

let sum = 0;

// prev - вычисляемое значение;
// prev = a[0];

let b = a.reduce(function (prev, item, index) {
    return prev + item;
}, 0 /* здесь можно задать кастомный prev */);


// let b = a.reduce((prev, item, index) => prev + item);


a = [3, 6, 9];

let max = 0;


// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i];
//     }
// }

// console.log(max);


let x = a.reduce((prev, item) => {
    if (prev < item) {
        return item;
    } else {
        return prev;
    }
}, a[0]);

console.log(c);

// индекс максимального элемента.

let x = a.reduce((prev, item) => {
    if (prev < item) {
        return item;
    } else {
        return prev;
    }
}, a[0]);

console.log(c);
