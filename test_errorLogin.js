const {I, MainPage, LoginPage} = inject();
Feature('Яндекс почта-логаун');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalAuthorizationData.falseLogin);
    await LoginPage.PressButtonLogInMail();
    I.see('Такого аккаунта нет', LoginPage.GlobalElementsLoginPage.errorMessage);
});