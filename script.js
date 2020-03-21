function myAlert(a, c, d) {
    //let a = 'Error';
}

myAlert('Error', 'red', '.test2');

class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }

    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
}


let m = new Alert('My Message', 'orange', '.test');


class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }

    showIconAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i>${this.message}</p>`;
    }

    myAlert() {
        alert(this.message);
    }
}

console.log(m);

m.showAlert();

let m2 = new Alert2('My Message', 'red', '.test', 'account_balance');

m2.showIconAlert();

m2.myAlert(this.message);