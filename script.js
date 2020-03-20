// Послыает запросы на http ресурсы
let new_request = new XMLHttpRequest();

function myFucntion(data) {
    console.log(data);
}

new_request.open('GET', 'http://getpost.itgid.info/index2.php', true); // либо true либо false
new_request.send();

new_request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFucntion(this.responseText)
    }
}


const http2 = new XMLHttpRequest();

http2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFucntion2(this.responseText)
    }
}

http2.open('POST', 'http://getpost.itgid.info/index2.php', true); // либо true либо false
hhtp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http2.send();
