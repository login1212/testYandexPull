const {I} = inject();

module.exports = {

    globalElements: {
        buttonLocation: 'a[class="home-link geolink link_geosuggest_yes home-link_black_yes"]',
        buttonTransitionYandexBy: 'a[role="button"]',
        listLocationCity: 'ul[class="popup__items input__popup-items"]>li:nth-of-type(1)',
        inputLocationCity: 'input[class="input__control input__input"]',
        titleLocationCity: 'div[class="city i-bem city_js_inited"]>label',
        buttonYet: '.home-arrow__tabs a[href="https://yandex.ru/all"]',
        MenuItemYet: 'a[class="home-link home-tabs__more-link home-link_black_yes"]',
        buttonMail: 'a[data-statlog="notifications.mail.logout.domik.login.big"]',
        linkSwitchLanguage: 'a[title="Выбрать язык"]',
        linkAddLanguage: 'a[data-statlog="head.lang.more"]',
        linkSearchYandex: 'div[class="service service_name_search"]>a',
        linkVideo: 'a[data-id="video"]',
        UrlVideo: 'https://yandex.ru/portal/video?from=morda&stream_channel=1550142789&stream_active=category&stream_category=film',
        linkImages: 'a[data-id="images"]',
        UrlImages: 'https://yandex.ru/images/',
        linkNews: 'a[data-id="news"]',
        UrlNews: 'https://yandex.ru/news/',
        linkMaps: 'a[data-id="maps"]',
        UrlMaps: 'https://yandex.ru/maps/49/penza/?ll=45.018316%2C53.195063&z=12',
        linkMarket: 'a[data-id="market"]',
        UrlMarket: 'https://market.yandex.ru/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch',
        linkTranslate: 'a[data-id="translate"]',
        UrlTranslate: 'https://translate.yandex.ru/',
        linkMusic: 'a[data-id="music"]',
        UrlMusic: 'https://music.yandex.ru/home',
    },
    setLocationPage(LocationCity) {
        I.click(this.globalElements.buttonLocation);
        I.waitForNavigation(this.globalElements.inputLocationCity);
        I.fillField(this.globalElements.inputLocationCity, LocationCity);
        I.waitForVisible(this.globalElements.listLocationCity, 20);
        I.click(this.globalElements.listLocationCity);
    },
    async checkYetYandexBy() {
        I.waitForNavigation(this.globalElements.buttonYet);
        I.click(this.globalElements.buttonYet);
        return await I.grabTextFrom(this.globalElements.MenuItemYet);
    },

    ComparisonArray(arrayMenuItemsYetLondon, arrayMenuItemsYetParis) {
        for (let i = 0; i < arrayMenuItemsYetLondon.length; i++) {
            if (arrayMenuItemsYetLondon[i] === arrayMenuItemsYetParis[i]) {
                if (arrayMenuItemsYetParis.length === i) {
                    console.log(true);
                }
            } else {
                console.log(false);
            }
        }
    },
    async CheckNavigation(Link, Url) {
        //I.click(Link);
        // let address = window.location.href;
        // if (address == Url) {
        //     console.log(true);
        // } else {
        //     throw address;
        // }
        let rez = await I.grabAttributeFrom(Link, 'href');
        if (rez == Url) {
            console.log(true);
        }
    },
    AddLanguage() {
        I.waitForVisible(this.globalElements.linkSwitchLanguage, 20);
        I.click(this.globalElements.linkSwitchLanguage);
        I.click(this.globalElements.linkAddLanguage);
    }
};