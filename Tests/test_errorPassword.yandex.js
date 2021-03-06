const {I, MainPage, LoginPage} = inject();
Feature('Проверка вывода ошибки об неверном пароле');

Scenario('Проверка вывода ошибки об неверном пароле', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.buttonMail);
    await LoginPage.LoginYandexMail(LoginPage.GlobalData.trueLogin);
    await LoginPage.PasswordYandexMail(LoginPage.GlobalData.falsePassword);
    I.see('Неверный пароль', LoginPage.GlobalElementsLoginPage.errorMessage);
});