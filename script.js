const getNum = document.querySelector('[data-somenum]');

const getMyAttr = document.querySelector('[myOwnAttr]');

// получить аттрибут по id 
const data_x = document.querySelector('#title');

// Получить все аттрибуты коллекции
console.log(data_x.dataset)
console.log(data_x.dataset.attribute);
console.log(getMyAttr);


const googler = document.querySelector('#linker');

console.log(googler.getAttribute('href'));

/* attributes - работа с аттрибутами */

const image = document.querySelector('.img');
image.onclick = () => {
    image.setAttribute('src', 'https://cs8.pikabu.ru/images/big_size_comm/2016-02_3/1455469903195166118.jpg');
}

// Проверить аттрибуты - attributes
// Объект со всеми аттрибутами
// Вывести определенный аттрибут через attributes
console.log(image.attributes.src);
