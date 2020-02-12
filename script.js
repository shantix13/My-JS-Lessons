
let out = document.querySelector(".out");
console.log(out);

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += k;
//     }
//     out.innerHTML += i;
// }

// начинаем с единицы - выводим таблицу Пифагора
for (let i = 1; i < 10; i++) {
    // Конкатенация
    //out.innerHTML += "3*" + i + "=" + (i * 3) + "<br><br>";
    // Интерполяция
    //out.innerHTML += `3 *${i}=${3 * i}`;

    for (let k = 1; k < 10; k++) {
        out.innerHTML += `${i} * ${k} = ${k * i} <br>`;
    }
    out.innerHTML += '<hr>';
}



