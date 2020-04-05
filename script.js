let user = {};
let user2 = new Object();


user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


let schedule = {};

function isEmpty(object) {
    for (keys in object) {
        if (!object[keys]) {
            alert('Empty');
            return false;
        }

        alert('Not Empty');
        return true;
    }
}


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130, // висячая запятая.
// }


// function sum(salaries) {
//     let allSalaries = 0;
//     for (keys in salaries) {
//         allSalaries += salaries[keys];
//     }

//     alert(allSalaries);

//     if (allSalaries === 0) {
//         alert(0);
//     }
// }

// sum(salaries);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {
    for (key in obj) {
        //alert(typeof obj[key]);
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}

multiplyNumeric(menu);





