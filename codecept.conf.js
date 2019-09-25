exports.config = {
    tests: './test.js',
    output: './output',
    windowSize: "1366x768",
    browser: 'Chrome',
    helpers: {
        Puppeteer: {
            url: 'https://yandex.by',
            show: true,
        }
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