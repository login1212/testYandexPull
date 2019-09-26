const {I} = inject();

module.exports = {
    GlobalElements: {
        buttonListLanguage: 'div[class="option__content"]>div>button',
        SelectEnglishList: 'div[class="select__list"]>div:nth-child(6) span',
        buttonLanguageSave: 'div[class="form__controls"]>button',
        titlePage: 'h1[class="options__header"]',
    },
    ChangeLanguage(language){
        I.click(this.GlobalElements.buttonListLanguage);
        I.click(language);
        I.click(this.GlobalElements.buttonLanguageSave);
    }
};