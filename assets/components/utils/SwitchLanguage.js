const LANGUAGE_ATTRIBUTE = '[data-lang]';

export class SwitchLanguage {
    constructor(languages) {
        const buttonsLangs = document.querySelectorAll(LANGUAGE_ATTRIBUTE);
        const attributes = getAttributeLanguages(languages);
        for (let i = 0; i < buttonsLangs.length; i++) {
            buttonsLangs[i].addEventListener('click', function () {
                let elems = document.querySelectorAll(attributes);
                let lang = this.dataset.lang;
                for (let i = 0; i < elems.length; i++) {
                    elems[i].innerHTML = elems[i].dataset[lang];
                }
            }, false);
        }
    }
}

function getAttributeLanguages(language) {
    let resultString = '';
    for (let i = 0; i < language.length; i++) {
        resultString += ('[data-' + language[i] + ']');
    }
    return resultString;
}




