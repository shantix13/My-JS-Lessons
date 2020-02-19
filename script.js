document.querySelector('.one').onclick = (event) => {
    console.log(e);
    console.log('click-one');
}

document.querySelector('.two').ondblclick = (e) => {
    console.log('double-click');
}


// mousemove не работает попиксельно.
document.querySelector('.three').onmousemove = () => {
    console.log('mousemove');
}


document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red';
}

document.querySelector('.three').onmouseleave = function () {
    document.querySelector('.three').style.background = 'green';
}

document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'yellow';

}

document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'orange';

}


document.querySelector('.one').oncontextmenu = () => {
    console.log('contextmenu');
    return false;
}


let prog_bar = 10;
document.querySelector('button').onclick = () => {
    prog_bar++;
    document.querySelector('progress').value = prog_bar;
}