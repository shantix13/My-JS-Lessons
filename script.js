// // console.log('Request data...');


// // setTimeout(() => {
// //     console.log('Preparing data...');

// //     const backendData = {
// //         server: 'aws',
// //         port: 2000,
// //         status: 'working'
// //     }

// //     setTimeout(() => {
// //         backendData.modified = true;
// //         console.log('Data reveived...', backendData);
// //     }, 2000);

// // }, 2000);

// // Тоже самое с помощью промисов


// const promise = new Promise(function (resolve, reject) {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     // Если мы передадим данные в метод resolve(), мы можем получить этиже данные в методе then - как параметры.
//     resolve(backendData);
// });

// promise.then(data => {
//     return promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//             //console.log('Data received', data);
//         }, 2000);
//     });
// })
//     .catch(err => console.error('Error:', err)) // Метод catch() выводит ошибку, если не удалось!
//     .then(clientData => {
//         console.log('Data received', clientData);
//     })
//     .finally(() => console.log('Finally')); // finally() выполняется в конце в независимости от того была ли ошибка или нет!

// // promise2.then(clientData => {
// //     console.log('Data received', clientData);
// // })




const sleep = ms => {
    return new Promise(
        resolve => {
            setTimeout(() => resolve(), ms);
        }
    );
};

// sleep(2000).then(() => console.log('After 2 seconds'));
// sleep(9000).then(() => console.log('After 9 seconds'));

// метод all() принимает массив промисов и выполнится, когда выполнятся все промисы.
Promise.all([sleep(2000), sleep(4000)])
    .then(() => console.log('All promises'));

// Массив race() также принимает массив промисов и выполняет свою функцию, когда выполнен первый промис. Это полезно, когда
// нужно определить, какой выполнился первым.
Promise.race([sleep(2000), sleep(4000)])
    .then(() => console.log('Race promises'));


