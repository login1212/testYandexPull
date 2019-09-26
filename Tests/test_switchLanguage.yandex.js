const {I, MainPage, LanguagePage} = inject();
Feature('Смена языка');

Scenario('Смена языка', async () => {
    I.amOnPage('https://yandex.by');
    await MainPage.AddLanguage();
    await LanguagePage.ChangeLanguage(LanguagePage.GlobalElements.SelectEnglishList);
    await MainPage.AddLanguage();
});