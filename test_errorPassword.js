const {I, MainPage, LoginPage} = inject();
Feature('Яндекс почта-логаун');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalAuthorizationData.trueLogin);
    await LoginPage.PressButtonLogInMail();
    await LoginPage.PasswordYandexMail(LoginPage.GlobalAuthorizationData.falsePassword);
    await LoginPage.PressButtonLogInMail();
    I.see('Неверный пароль', LoginPage.GlobalElementsLoginPage.errorMessage);
});