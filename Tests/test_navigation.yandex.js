const {I, MainPage} = inject();
Feature('Тестирование меню навигации');

Scenario('Навигация', async () => {
    I.amOnPage('/');
    await MainPage.CheckNavigation(MainPage.globalElements.linkVideo, MainPage.globalElements.UrlVideo);
    await MainPage.CheckNavigation(MainPage.globalElements.linkImages, MainPage.globalElements.UrlImages);
    await MainPage.CheckNavigation(MainPage.globalElements.linkNews, MainPage.globalElements.UrlNews);
    await MainPage.CheckNavigation(MainPage.globalElements.linkMaps, MainPage.globalElements.UrlMaps);
    await MainPage.CheckNavigation(MainPage.globalElements.linkMarket, MainPage.globalElements.UrlMarket);
    await MainPage.CheckNavigation(MainPage.globalElements.linkTranslate, MainPage.globalElements.UrlTranslate);
    await MainPage.CheckNavigation(MainPage.globalElements.linkMusic, MainPage.globalElements.UrlMusic);
});