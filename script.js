// // Послыает запросы на http ресурсы
// let new_request = new XMLHttpRequest();

// function myFucntion(data) {
//     console.log(data);
// }

// new_request.open('GET', 'http://getpost.itgid.info/index2.php', true); // либо true либо false
// new_request.send();

// new_request.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         myFucntion(this.responseText)
//     }
// }


// const http2 = new XMLHttpRequest();

// http2.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         myFucntion2(this.responseText)
//     }
// }

// http2.open('POST', 'http://getpost.itgid.info/index2.php', true); // либо true либо false
// hhtp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// http2.send();

// Fetc всегда возвращает promise
fetch('http://getpost.itgid.info/index2.php')
    .then(data => {
        console.log(data);
        console.log(data.text());
        data.text().then(data2 => {
            console.log(data2);
        })
            .then(data => {
                console.log(data);
            })
    });

// POST REQUEST 

fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: 'auth=password' // body data type must match "Content-Type" header
})
    .then(response => response.text())
    .then(response => {
        console.log(response);
    })


