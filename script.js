let array = ['Shantix', 33, 15, 'Hello World', false];

//console.log(array);

for (let i = 0; i < array.length; i++) {
    //console.log();
}


// for of  работает с массивами, сетами.
for (const elem of array) {
    // console.log(elem);
}

// map принимает массив, меняет его и возвращает видоизмененный массив, создавая новый.

const mapArray = array.map((elem, index, array) => { // callback
    // всегда что-то возвращает
    //return elem + '33';
});

// console.log(mapArray);


// filter - фильтрует элемент по заданной callback функции, отбрасывая ненужные значения не по условию.

let person = [
    {
        id: 1,
        name: 'Jora',
        age: 22
    },

    {
        id: 2,
        name: 'Vasya',
        age: 33,
    },

    {
        id: 3,
        name: 'Jora',
        age: 42
    }
];

let filterPerson = person.filter(elem => {
    if (elem.age < 35) {
        return elem;
    }
});

console.log(filterPerson);

// метод find работает также как фильтр, но возвращает первый попавшийся результат.

let findElem = array.find(elem => {
    return elem == 33;
});

console.log(findElem);

// метод reduce (англ - уменьшить) складывает сумму чисел в массиве, либо умножает

let sumArr = [1, 3, 5, 8];

const total = sumArr.reduce((oldValue, newValue){
    return oldValue + newValue;
}, 6.8);

console.log(total);