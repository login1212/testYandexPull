exports.config = {
    tests: './Tests/*.yandex.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://yandex.ru',
            browser: 'chrome',
            windowSize: '1366x768',
            show: true,
            waitForTimeout: 50000,
            chrome: {
                "args":[
                    'disable-infobars=true',
                    'safebrowsing-disable-download-protection',
                    '--disable-impl-side-painting',
                    '--disable-gpu',
                    '--ignore-certificate-errors',
                    //'--headless',
                    '--no-sandbox',
                    '--start-maximized']
            },
        },
    },
    include: {
        I: './steps_file.js',
        MainPage: './PageObject/MainPage.js',
        LoginPage: './PageObject/LoginPage.js',
        MailPage: './PageObject/MailPage.js',
        LanguagePage: './PageObject/LanguagePage.js',
        MarketPage: './PageObject/MarketPage.js',
        MusicPage: './PageObject/MusicPage.js'
    },
    bootstrap: null,
    name: 'test'
};