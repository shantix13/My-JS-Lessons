let out1 = 0;

document.querySelector('.block-1').onclick = () => {
    out1++;
    document.querySelector('.out-1').innerHTML = 'click' + out1;
}


let out2 = 0;

document.querySelector('.block-2').ondblclick = () => {
    out2++;
    document.querySelector('.out-2').innerHTML = 'dblclick' + out2;
}


let out3 = 0;

document.querySelector('.block-3').onmousemove = () => {
    out3++;
    document.querySelector('.out-3').innerHTML = 'mousemove' + out3;
}

let out4 = 0;

document.querySelector('.block-4').onmousenter = () => {
    out4++;
    document.querySelector('.out-4').innerHTML = 'mouseenter' + out4;
}

let out5 = 0;

document.querySelector('.block-5').onmouseleave = () => {
    out5++;
    document.querySelector('.out-5').innerHTML = 'mouseleave' + out5;
} 