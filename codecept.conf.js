exports.config = {
  tests: './test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://yandex.by',
      windowSize: '1366x768',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    MainPage: './MainPage.js',
    LoginPage: './LoginPage.js',
    MailPage: './MailPage.js',
  },
  bootstrap: null,
  name: 'test'
}