const {I, MainPage, LanguagePage} = inject();
Feature('Яндекс почта-логаун');

Scenario('Логаут', async () => {
    I.amOnPage('/');
    await MainPage.AddLanguage();
    await LanguagePage.ChangeLanguage(LanguagePage.GlobalElements.SelectEnglishList);
    await MainPage.AddLanguage();
    I.see(LanguagePage.GlobalElements.titlePage);
});