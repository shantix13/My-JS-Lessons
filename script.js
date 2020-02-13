const num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const letter_array = ['a', 'b', 'c', 'd', 'e', 'f'];

// push() - добавляет элемент к массиву вконце. Возвращает длин массива.

console.log(num_array.length);
// Добавили один элемент, вернули длину массива, 10 элементов
console.log(num_array.push(10));

// Добавили несколько элементов

console.log(num_array.push(2, 13, 88));
console.log(letter_array.push('x, z'));


// pop() - удаляет элементы в конце массива. Возвращает последний элемент
// массива, который был удален.

console.log(num_array.pop());
console.log(num_array);

// оператор delete удаляет нужный элемент массива.

delete num_array[3];
console.log(num_array); // в этом случае место элемента будет
// empty - дырка в массиве. delete не влияет на длину массива.


// splice() - "хирургическая" работа с элементами массива. 
// splice(start, number of items, add elements)

num_array.splice(3, 3, 'hello');
console.log(num_array);

// shift и unshift - добавляет и удаляет элементы массива в начале.




