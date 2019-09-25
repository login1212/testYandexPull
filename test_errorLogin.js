const {I, MainPage, LoginPage} = inject();
Feature('Яндекс почта-логаун');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalData.falseLogin);
    I.see(LoginPage.GlobalData.errorLogin, LoginPage.GlobalElementsLoginPage.errorMessage);
});