const {I, MainPage, LoginPage} = inject();
Feature('Проверка вывода ошибки об неверном логине');

Scenario('Проверка вывода ошибки об неверном логине', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalData.falseLogin);
    I.see(LoginPage.GlobalData.errorLogin, LoginPage.GlobalElementsLoginPage.errorMessage);
});