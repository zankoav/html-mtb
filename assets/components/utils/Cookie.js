/**
 * 10 years
 * @type {number}
 */
const FOREVER = 311040000000;

export class Cookie {

    static setCookie(name, value, options) {
        options = options || {};
        let expires = options.expires;
        if (typeof expires == "number" && expires) {
            let d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        let updatedCookie = name + "=" + value;
        for (let propName in options) {
            updatedCookie += "; " + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    static setCookieForever(name, value) {
        Cookie.setCookie(name, value, {
                expires: FOREVER
            }
        );
    }

    static getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static deleteCookie(name) {
        Cookie.setCookie(name, "",
            {
                expires: -1
            }
        )
    }
}


