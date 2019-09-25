// const {I, MainPage, LoginPage} = inject();
// Feature('Test.js');
//
// Scenario('test something', async () => {
//     I.amOnPage('/');
//     I.click(MainPage.globalElements.buttonMail);
//     await LoginPage.LoginYandexMail(LoginPage.GlobalData.trueLogin);
//     await LoginPage.PasswordYandexMail(LoginPage.GlobalData.truePassword);
//     I.waitForVisible(LoginPage.GlobalElementsLoginPage.mailUserName, 30);
//     I.see(LoginPage.GlobalData.trueLogin, LoginPage.GlobalElementsLoginPage.mailUserName);
// });
const {I, MainPage, LanguagePage, MarketPage} = inject();
Feature('Яндекс почта-логаун');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    I.click(MainPage.globalElements.linkMarket);
    pause();
    await MarketPage.addDoubleComprasionProduct(MarketPage.GlobalElements.modelPhoneNote8);
    // await MainPage.AddLanguage();
    // await LanguagePage.ChangeLanguage(LanguagePage.GlobalElements.SelectEnglishList);
    // I.waitForVisible(MainPage.globalElements.buttonLocation, 20);
    // I.click(MainPage.globalElements.buttonLocation);
    // I.waitForNavigation(MainPage.globalElements.titleLocationCity);
    // I.see(MainPage.globalElements.titleLocationCity);
});