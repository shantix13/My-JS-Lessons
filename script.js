//наш простой цикл

for (let i = 0; i < 6; i++) {
    console.log(i);
}


// Цикл while более гибок при использовании инкремента в разных местах.
let k = 0;
while (k < 6) {
    console.log('k: ' + k);
    k++;
}

// найдем сумму чисел от 0 до 10

let sum = 0;
let p = 0;
let flag = 3; // Добавили флаг

while (p <= 10) {
    sum = sum + p;
    p++;
}

console.log('sum = ' + sum);


let out = document.querySelector('.out');

p = 0;
let outStr = '';
while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '0';
        } else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    p++;

    outStr += '<br>';
}
out.innerHTML = outStr;




