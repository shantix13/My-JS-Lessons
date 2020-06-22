let a = 7;


setTimeout(() => { a = 22 },
    99);

console.log(a);

let b = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(a = 99);
    }, 2000);
});