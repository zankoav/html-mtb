const WARNING = 'WARNING! This browser can\'t use localStorage';

export class LocalStorage {

    static setItem(name, value) {
        if (window.localStorage) {
            localStorage.setItem(name, value);
        } else {
            console.log(WARNING);
        }

    }

    static getItem(name) {
        if (window.localStorage) {
            localStorage.getItem(name);
        } else {
            console.log(WARNING);
        }
    }

    static removeItem(name) {
        if (window.localStorage) {
            localStorage.removeItem(name)
        } else {
            console.log(WARNING);
        }
    }

    static clear() {
        if (window.localStorage) {
            localStorage.clear();
        } else {
            console.log(WARNING);
        }
    }
}


