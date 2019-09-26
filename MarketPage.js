const {I} = inject();

module.exports = {
    GlobalElements: {
        modelPhoneNote8: 'Note 8',
        sectionActionCamera: 'a[href="/catalog--ekshn-kamery-v-minske/71635/list?hid=14369750"]',
        searchProduct: 'span[class="search2__input"]',
        buttonSearch: 'span[class="search2__button"]>button',
        resultSearch: 'div[class="n-snippet-card2__part n-snippet-card2__part_type_left"]>a>img',
        linkSectionElectronics: 'a[href="/catalog--elektronika/54440"]',
        filterPriceDescending: locate('div[class="n-filter-sorter i-bem n-filter-sorter_js_inited"]>a').at(1),
        addInComprasionProduct: 'div[class="n-snippet-cell2__toolbar"]>div>div',
        transitionInComprasionProduct: 'div[class="popup-informer__controls"] a',
        listComprasionProduct: 'div[class="n-compare-content__line i-bem n-compare-content__line_js_inited"]>div',
        deleteListComprasion: 'div[class="n-compare-toolbar__action"]',
    },
    addDoubleComprasionProduct(Product) {
        I.waitForNavigation(this.GlobalElements.searchProduct);
        I.fillField(this.GlobalElements.searchProduct, Product);
        I.click(this.GlobalElements.buttonSearch);
        I.waitForNavigation(this.GlobalElements.resultSearch);
        I.moveCursorTo(locate(this.GlobalElements.resultSearch).at(1));
        I.click(this.GlobalElements.addInComprasionProduct);
    },
    SortingByPriceProduct(Product) {
        I.waitForNavigation(this.GlobalElements.linkSectionElectronics);
        I.click(this.GlobalElements.linkSectionElectronics);
        I.waitForNavigation(Product);
        I.click(Product);
        I.waitForNavigation(this.GlobalElements.filterPriceDescending);
        I.click(this.GlobalElements.filterPriceDescending);
    }

};