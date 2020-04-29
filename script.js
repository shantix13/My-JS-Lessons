// onclick

// document.querySelector('#btn').onclick = e => {
//     console.log(e);
// };

// Variable better

const clicker = document.querySelector('#btn');
// oncliсk перезаписывает событие
// clicker.onclick = e => console.log(e);


// addEventListener выполняет все задекларированные события.
clicker.addEventListener('click', e => {
    console.log(e.target.tagName);
});


clicker.addEventListener('mouseout', myFunc);

function myFunc() {
    alert('Hello');
}

// отличия target и currentTarget
// target - event будет сам элемент, на который мы нажимаем. вложенный элемент.
// currentTarget - элемент, который  является родителем нажимаего элемента.



