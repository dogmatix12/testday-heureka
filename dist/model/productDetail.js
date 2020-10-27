"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetail = void 0;
const product_model_1 = require("./product.model");
class ProductDetail extends product_model_1.Product {
    constructor(model) {
        super(model);
        this.priceRange = "0 - 0";
    }
}
exports.ProductDetail = ProductDetail;
//# sourceMappingURL=productDetail.js.map