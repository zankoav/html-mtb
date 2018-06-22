export class SwitchLanguage {
    constructor(languages) {
        const buttonsLangs = document.querySelectorAll('[data-lang]');
        const languagesString = languageString(languages);
        for (let i = 0; i < buttonsLangs.length; i++) {
            buttonsLangs[i].addEventListener('click', function () {
                let elems = document.querySelectorAll(languagesString);
                let lang = this.dataset.lang;
                for (let i = 0; i < elems.length; i++) {
                    elems[i].innerHTML = elems[i].dataset[lang];
                }
            }, false);
        }
    }
}

function languageString(language) {
    let resultString = '';
    for (let i = 0; i < language.length; i++) {
        resultString += ('[data-' + language[i] + ']');
    }
    return resultString;
}




