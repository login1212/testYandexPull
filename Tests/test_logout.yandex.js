const {I, LoginPage, MainPage, MailPage} = inject();
Feature('Яндекс почта-логаут');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalData.trueLogin);
    await LoginPage.PasswordYandexMail(LoginPage.GlobalData.truePassword);
    I.waitForVisible(LoginPage.GlobalElementsLoginPage.mailUserName, 20);
    await MailPage.ExitServicesYandexMail();
    I.seeCurrentUrlEquals('/');
});