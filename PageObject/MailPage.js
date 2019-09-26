const {I, LoginPage} = inject();

module.exports = {
    GlobalElementsMailPage: {
        mailUserName: 'div[class="mail-User-Name"]',
        exitServicesYandex: 'a[data-metric="Sign out of Yandex services"]',
        menuItemsUser: 'span[id="recipient-1"]',
    },
    ExitServicesYandexMail(){
        I.click(this.GlobalElementsMailPage.menuItemsUser);
        I.waitForVisible(this.GlobalElementsMailPage.exitServicesYandex, 20);
        I.click(this.GlobalElementsMailPage.exitServicesYandex);
    }
};