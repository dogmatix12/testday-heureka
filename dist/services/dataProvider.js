"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProvider = void 0;
const productDetail_1 = require("model/productDetail");
const logger_1 = require("./logger");
const mockData_1 = require("./mockData");
const log = new logger_1.Logger({
    name: "DataProvider",
});
class DataProvider {
    getProductPage(pCategoryId, limit, pOffset) {
        log.debug(`getProductPage(${pCategoryId})`);
        // `/products/${pCategoryId}/count/`  --> 11
        const products = mockData_1.productMap.get(pCategoryId);
        if (!products) {
            throw new Error("Product does not exists");
        }
        const PAGE_SIZE = 5;
        const productDetails = products.slice(pOffset, pOffset + PAGE_SIZE).map((p) => new productDetail_1.ProductDetail(p));
        return Promise.resolve({
            offset: pOffset,
            pageSize: PAGE_SIZE,
            count: products.length,
            items: productDetails
        });
    }
    getCategories() {
        return Promise.resolve(mockData_1.categoryArr);
    }
}
exports.DataProvider = DataProvider;
//# sourceMappingURL=dataProvider.js.map