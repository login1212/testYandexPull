exports.config = {
    tests: './test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://yandex.by',
            show: true,
            browser: "chrome",
            desiredCapabilities: {
                chromeOptions: {
                    "args": [ "--headless", "--disable-gpu", "--window-size=800,600" ]
                }
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