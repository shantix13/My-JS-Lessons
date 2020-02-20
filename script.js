
// событие изменения input
// document.querySelector('.inputer').oninput = (event) => {
//     console.log(event);
// }

// при нажатии клавиши в поле input
// document.querySelector('.inputer').onkeypress = (event) => {
//     // console.log(event); keyboard event
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
// }

// 48-57 code - это цифры

// вниз и вверх фиксируется только на клавишах. Вспомогательные
// клавиши не обрабатываются методом onkeypress.
// Нужно использовать onkeyup или onkeydown


document.querySelector('.inputer').onkeydown = (event) => {
    // console.log(event); keyboard event
    console.log(event.charCode);
    console.log(event.code);
    console.log(event.keyCode);
}


