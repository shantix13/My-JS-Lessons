const list = document.querySelector('.list');

//console.log(list);

list.addEventListener('click', function (e) {
    //console.log(e.target);
    //console.log(event.target.className);

    // add class
    event.target.classList.add('red');

    //remove class
    event.target.classList.remove('blue');

    // toggle class
    event.target.classList.toggle('box');
});