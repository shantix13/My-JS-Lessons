let array = [
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Антон', age: 44, budget: 40000 },
    { name: 'Анна', age: 40, budget: 44000 },
    { name: 'Вероника', age: 35, budget: 20000 }
];


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// for (person of array) {
//     console.log(person);
// }


// метод forEach

// array.forEach(function (person, index, arrayx) {
//     console.log(person);
// });

// array.forEach(person => console.log(person));


// Метод map
// const newarray = array.map(person => {
//     return `${person.name} (${person.age})`;
// });

// const newarray = array.map(person => `${person.name} (${person.age})`);

// Метод filter

// const newarray = array.filter(person => {
//     if (person.age > 39) {
//         return person;
//     }
// });

// const newarray = array.filter(person => {
//     return person.age > 39;
// });

// const newarray = array.filter(person => person.age > 39);

// Метод reduce

// const newarray = array.reduce(function (newB, oldB) {
//     return newB + oldB.budget;
// }, 0);

// const newarray = array.reduce((totalx, personx) => {
//     return totalx + personx.budget;
// }, 0)

// const newarray = array.reduce((totalx, personx) => totalx + personx.budget, 0);


// Метод find 

// const newarray = array.find(personx => personx.name == "Игорь");

// метод findIndex

// const newarray = array.findIndex(personx => personx.name == "Игорь");


// console.log(newarray);

const maxBudget = array.filter(personx => personx.budget > 30000).map(personx => {
    return {
        info: `${personx.name}(${personx.age})`,
        budget: personx.budget,
    }
}).
    reduce((totalx, budgetx) => totalx + budgetx.budget, 0);

console.log(maxBudget);