const one = document.querySelector('.one');

// Работа со стилями элемента
// Прописываются inline
one.style.width = '150px';
one.style.paddingBottom = '40px';

//console.log(one.style);


// присваиваем класс элементу

one.classList.add('two', 'three');

one.classList.remove('two');


const toggler = document.querySelector('.toggle');

toggler.onclick = function () {
    this.classList.toggle('three');
}

// атрибуты и работа с ними
// в html5 новые аттрибуты используются с приставкой data

console.log(one.getAttribute('data'));

// получили аттрибут href первого элемента link
console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-numb', 6);

// получим стоимость бензина в литрах по коэффициенту

const gas = document.querySelectorAll('.gas');

for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let amount = this.getAttribute('data-procent');
        let gallons = document.querySelector('#gallons').value;
        console.log(amount * gallons);
    }
}

// Создаем элементы и работаем с ними

let element_one = document.createElement('div');
element_one.innerHTML = 'Hello';
element_one.classList.add('new_class');
element_one.onclick = () => {
    alert('Hello!');
}

console.log(element_one);

// Добавляем элемент в DOM

document.querySelector('.tester').appendChild(element_one);
