const {I, LoginPage, MainPage, MailPage} = inject();
Feature('Яндекс почта-логаун');

Scenario.only('Логаут', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalAuthorizationData.trueLogin);
    await LoginPage.PressButtonLogInMail();
    await LoginPage.PasswordYandexMail(LoginPage.GlobalAuthorizationData.truePassword);
    await LoginPage.PressButtonLogInMail();
    I.waitForVisible(LoginPage.GlobalElementsLoginPage.mailUserName, 30);
    await MailPage.ExitServicesYandexMail();
    I.seeCurrentUrlEquals('/');
});