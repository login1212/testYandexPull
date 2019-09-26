exports.config = {
    tests: './*.yandex.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://yandex.ru',
            browser: 'chrome',
            //restart: true,
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
        MainPage: './MainPage.js',
        LoginPage: './LoginPage.js',
        MailPage: './MailPage.js',
        LanguagePage: './LanguagePage.js',
        MarketPage: './MarketPage.js',
        MusicPage: './MusicPage.js'
    },
    bootstrap: null,
    name: 'test'
};