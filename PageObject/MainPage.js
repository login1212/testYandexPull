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
        linkSearchYandex: 'a[class="logo logo_type_link logo_name_ys-ru-86x35"]',
        linkVideo: 'a[data-id="video"]',
        UrlVideo: 'https://yandex.ru/portal/video?stream_active=category&stream_channel=default&stream_category=film&from_block=video-tabs&from=morda',
        linkImages: 'a[data-id="images"]',
        UrlImages: 'https://yandex.ru/images/',
        linkNews: 'a[data-id="news"]',
        UrlNews: 'https://news.yandex.ru/',
        linkMaps: 'a[data-id="maps"]',
        UrlMaps: 'https://yandex.ru/maps',
        linkMarket: 'a[data-id="market"]',
        UrlMarket: 'https://market.yandex.ru/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch',
        linkTranslate: 'a[data-id="translate"]',
        UrlTranslate: 'https://translate.yandex.ru/',
        linkMusic: 'a[data-id="music"]',
        UrlMusic: 'https://music.yandex.ru/',
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

   async ComparisonArray(arrayMenuItemsYetLondon, arrayMenuItemsYetParis) {
        for (let i = 0; i < arrayMenuItemsYetLondon.length; i++) {
            if (arrayMenuItemsYetLondon[i] === arrayMenuItemsYetParis[i]) {
                if (arrayMenuItemsYetParis.length === i) {
                    await console.log('Успешно');
                }
            } else {
                throw arrayMenuItemsYetLondon;
            }
        }
    },
    async CheckNavigation(Link, Url) {
        if (await I.grabAttributeFrom(Link, 'href') === Url)
        {
            await console.log('Успешно');
        }
        else throw Url;
    },
    AddLanguage() {
        I.waitForVisible(this.globalElements.linkSwitchLanguage, 20);
        I.click(this.globalElements.linkSwitchLanguage);
        I.click(this.globalElements.linkAddLanguage);
    }
};