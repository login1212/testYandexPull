const {I} = inject();

module.exports = {
    GlobalElements: {
        modelPhoneNote8: 'Note 8',
        searchProduct: 'span[id="market-search"]',
        buttonSearch: 'span[class="search2__button"]>button',
        resultSearch: 'div[class="layout layout_type_search i-bem"] img',
        addInComprasionProduct: 'div[class="n-snippet-cell2__toolbar"]>div>div',
        transitionInComprasionProduct: 'div[class="popup-informer__controls"] a',
        listComprasionProduct: 'div[class="n-compare-content__line i-bem n-compare-content__line_js_inited"]>div',
    },
    changeLocationRegionMarket(){

    },
    addDoubleComprasionProduct(Product) {
        I.waitForNavigation(this.GlobalElements.searchProduct);
        I.fillField(this.GlobalElements.searchProduct, Product);
        I.click(this.GlobalElements.buttonSearch);
        I.waitForNavigation(this.GlobalElements.resultSearch);
        I.moveCursorTo(locate(this.GlobalElements.resultSearch).at(1));
        I.click(this.GlobalElements.addInComprasionProduct);
    }
};