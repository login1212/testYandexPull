//export {expect} from 'chai';
const {I, MainPage, LoginPage} = inject();
Feature('Смена местоположения');

Scenario.only('Смена местоположения', async () => {
    I.amOnPage('/');
    await MainPage.setLocationPage('Лондон');
    let arrayMenuItemsYetLondon = await MainPage.checkYetYandexBy();
    await MainPage.setLocationPage('Париж');
    let arrayMenuItemsYetParis = await MainPage.checkYetYandexBy();
    await MainPage.ComparisonArray(arrayMenuItemsYetLondon, arrayMenuItemsYetParis);
    //expect(arrayMenuItemsYetLondon).to.have.all.members(arrayMenuItemsYetParis);
});