let my_array = [4, 5, 6, 7, 8, 9];

// Создаем двумерный массив. Обрати внимание на стиль написания.

let multi_array = [
    [1, 2],
    [4, 5],
    [6, 7]
];

//console.log(multi_array);

// for (let i = 0; i < multi_array.length; i++) {
//     //console.log(multi_array[i]);
//     let c = multi_array[i]; // для упрощения можно сделать так.
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }

// for (let i = 0; i < multi_array.length; i++) {
//     //console.log(multi_array[i]);
//     let c = multi_array[i]; // для упрощения можно сделать так.
//     for (let k = c.length - 1; k >= 0; k--) {
//         console.log(c[k]);
//     }
// }

let out = '';

// for (let i = 0; i < multi_array.length; i++) {
//     for (let k = 0; k < multi_array[i].length; k++) {
//         out += multi_array[i][k] + ' ';
//     }
//     out += '<br>';
// }

// document.querySelector('.out').innerHTML = out;

for (let i = 0; i < multi_array.length; i++) {
    for (let k = 0; k < multi_array[i].length; k++) {
        if (multi_array[i][k] > 4) {
            out += multi_array[i][k] + ' ';
        }
    }
    out += '<br>';
}

document.querySelector('.out').innerHTML = out;


let new_array = [1, 0, 0, 0, 0, 0, 0];
let incr = 0;
document.querySelector('.out2').innerHTML = new_array;
document.querySelector('button').onclick = function () {
    if (incr + 1 < new_array.length) {
        new_array[incr] = 0;
        new_array[incr + 1] = 1;
        incr++;
    }
    document.querySelector('.out2').innerHTML = new_array;
}
