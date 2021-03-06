const {I, MailPage} = inject();

module.exports = {
    GlobalData: {
        trueLogin: 'AutotestUser',
        truePassword: 'AutotestUser123',
        falseLogin: 'NoAutotestUser',
        falsePassword: 'NoAutotestUser123',
        errorLogin: 'Такого аккаунта нет',
        errorPassword: 'Неверный пароль',
    },
    GlobalElementsLoginPage: {
        inputLoginMail: 'input[id="passp-field-login"]',
        inputPasswordMail: 'input[id="passp-field-passwd"]',
        buttonLogInMail: 'div button:nth-of-type(1)',
        mailUserName: 'div[class="mail-User-Name"]',
        errorMessage: 'div[class="passp-form-field__error"]',
    },
    LoginYandexMail(login) {
        I.waitForNavigation(this.GlobalElementsLoginPage.inputLoginMail);
        I.fillField(this.GlobalElementsLoginPage.inputLoginMail, login);
        I.waitForVisible(this.GlobalElementsLoginPage.buttonLogInMail, 20);
        I.click(this.GlobalElementsLoginPage.buttonLogInMail);
    },
    PasswordYandexMail(password) {
        I.waitForNavigation(this.GlobalElementsLoginPage.inputPasswordMail);
        I.fillField(this.GlobalElementsLoginPage.inputPasswordMail, password);
        I.waitForVisible(this.GlobalElementsLoginPage.buttonLogInMail, 20);
        I.click(this.GlobalElementsLoginPage.buttonLogInMail);
    },
};