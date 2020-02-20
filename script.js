document.querySelector('.block-1').addEventListener('touchstart', myTouch);
document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
document.querySelector('.block-2').addEventListener('touchmove', myTouchMove);

function myTouch(event) {
    // console.log('touch');
    // console.log(event);
    document.querySelector('.out-1').innerHTML = event.touches.length;
}

// событие touch не работает на компе, но можно эмулировать его в chrome 
// web dev tool

// в событии event:
// touchlist - сколько раз 
// force - интенсивность нажатия
// target - элемент на котором происходит событие
// radius - радиус события (захвачен ли элемент или нет)

function myTouchEnd(event) {
    document.querySelector('.out-2').innerHTML += 'end';
}

function myTouchMove(e) {
    event.preventDefault();
    document.querySelector('.block-2').innerHTML += 'move';
    return false;
}




