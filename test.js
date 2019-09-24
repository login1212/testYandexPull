// const {I, MainPage, LoginPage} = inject();
// Feature('Test.js');
//
// Scenario('test something', async () => {
//     I.amOnPage('/');
//     I.click(MainPage.globalElements.buttonMail);
//     await LoginPage.LoginYandexMail(LoginPage.GlobalAuthorizationData.trueLogin);
//     await LoginPage.PressButtonLogInMail();
//     await LoginPage.PasswordYandexMail(LoginPage.GlobalAuthorizationData.truePassword);
//     await LoginPage.PressButtonLogInMail();
//     I.waitForVisible(LoginPage.GlobalElementsLoginPage.mailUserName, 30);
//     I.see(LoginPage.GlobalAuthorizationData.trueLogin, LoginPage.GlobalElementsLoginPage.mailUserName);
// });
const {I, MainPage} = inject();
Feature('Яндекс почта-логаун');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    await MainPage.CheckNavigation(MainPage.globalElements.linkVideo, MainPage.globalElements.UrlVideo);
    await MainPage.CheckNavigation(MainPage.globalElements.linkImages, MainPage.globalElements.UrlImages);
    await MainPage.CheckNavigation(MainPage.globalElements.linkNews, MainPage.globalElements.UrlNews);
    await MainPage.CheckNavigation(MainPage.globalElements.linkMaps, MainPage.globalElements.UrlMaps);
    await MainPage.CheckNavigation(MainPage.globalElements.linkMarket, MainPage.globalElements.UrlMarket);
    await MainPage.CheckNavigation(MainPage.globalElements.linkTranslate, MainPage.globalElements.UrlTranslate);
    await MainPage.CheckNavigation(MainPage.globalElements.linkMusic, MainPage.globalElements.UrlMusic);
});