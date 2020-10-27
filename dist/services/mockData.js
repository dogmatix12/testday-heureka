"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMap = exports.categoryArr = void 0;
const category_model_1 = require("../model/category.model");
const categoryArr = Array();
exports.categoryArr = categoryArr;
categoryArr.push(new category_model_1.Category({ categoryId: 1, title: "Mobilní telefony" }));
categoryArr.push(new category_model_1.Category({ categoryId: 2, title: "Vertikutátory" }));
categoryArr.push(new category_model_1.Category({ categoryId: 3, title: "Hudební nástroje" }));
const productMap = new Map();
exports.productMap = productMap;
productMap.set(1, [{ "categoryId": 1, "productId": 1, "title": "Apple iPhone 6" }, { "categoryId": 1, "productId": 2, "title": "Apple iPHone 6S" }, { "categoryId": 1, "productId": 3, "title": "Apple iPHone 5S" }, { "categoryId": 1, "productId": 4, "title": "Lenovo VIBE Shot 32GB" }, { "categoryId": 1, "productId": 5, "title": "Lenovo VIBE Shot 64GB" }, { "categoryId": 1, "productId": 6, "title": "Huawei P8" }, { "categoryId": 1, "productId": 7, "title": "Huawei P8 lite" }, { "categoryId": 1, "productId": 8, "title": "Samsung Galaxy S1000 mini" }, { "categoryId": 1, "productId": 9, "title": "Microsoft Lumia" }, { "categoryId": 1, "productId": 10, "title": "Sony Iksp\u00edria" }, { "categoryId": 1, "productId": 11, "title": "Fieldman FZV 4001-E" }]);
productMap.set(2, [{ "categoryId": 2, "productId": 12, "title": "Fieldman FZV 4005-F" }, { "categoryId": 2, "productId": 13, "title": "Fiskars Quickfit A" }, { "categoryId": 2, "productId": 14, "title": "Fiskars Quickfit B" }, { "categoryId": 2, "productId": 15, "title": "Hecht 1538" }, { "categoryId": 2, "productId": 16, "title": "Hecht 2679" }, { "categoryId": 2, "productId": 17, "title": "Hecht 10000000 deLuxe" }, { "categoryId": 2, "productId": 18, "title": "D\u017eon d\u00fdr SoilDestroyer 2000 nitro" }, { "categoryId": 2, "productId": 19, "title": "D\u017eon d\u00fdr Tr\u00e1vn\u00edkMaker 1937 turbo" }]);
productMap.set(3, [{ "categoryId": 3, "productId": 20, "title": "Anatolian TS China 18\"" }, { "categoryId": 3, "productId": 21, "title": "Anatolian BS Splash 10\"" }, { "categoryId": 3, "productId": 22, "title": "Anatolian EMS Light Crash 16\"" }, { "categoryId": 3, "productId": 23, "title": "Yamaha YFG 812 CII" }, { "categoryId": 3, "productId": 24, "title": "Yamaha YFG 811 II" }, { "categoryId": 3, "productId": 25, "title": "Amati ABN 36" }, { "categoryId": 3, "productId": 26, "title": "Stagg M20" }, { "categoryId": 3, "productId": 27, "title": "Stagg M50 E" }, { "categoryId": 3, "productId": 28, "title": "Stagg M40 S" }]);
//# sourceMappingURL=mockData.js.map