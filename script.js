//console.log(this);  // window
// Стрелочная функция указывает на window/


document.querySelector('.b-1').onclick = function () {
    //console.log(this);
    this.style.background = 'red';
}

let p = document.querySelectorAll('p');

function f1() {
    this.style.background = 'red';
}

for (i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}


class User {
    constructor(model) {
        this.model = model;
    }

    showThis() {
        console.log(this);
    }
}


const boat = new User('7444');
const boat2 = new User(3333);
console.log(boat);
boat.showThis();


class Yellow extends U2 {
    constructor(model, color) {
        super(model);
        this.color = color;
    }
}

let b = new Yellow('666', 'red');

console.log(b);