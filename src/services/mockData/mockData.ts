import { Category } from "../../model/category.model";
import { Product } from "../../model/product.model";

const categoryArr = Array<Category>();
categoryArr.push(new Category({ categoryId: 1, title: "Mobilní telefony" }));
categoryArr.push(new Category({ categoryId: 2, title: "Vertikutátory" }));
categoryArr.push(new Category({ categoryId: 3, title: "Hudební nástroje" }));


const productMap = new Map<number, Product[]>();
productMap.set(1, [{ "categoryId": 1, "productId": 1, "title": "Apple iPhone 6" }, { "categoryId": 1, "productId": 2, "title": "Apple iPHone 6S" }, { "categoryId": 1, "productId": 3, "title": "Apple iPHone 5S" }, { "categoryId": 1, "productId": 4, "title": "Lenovo VIBE Shot 32GB" }, { "categoryId": 1, "productId": 5, "title": "Lenovo VIBE Shot 64GB" }, { "categoryId": 1, "productId": 6, "title": "Huawei P8" }, { "categoryId": 1, "productId": 7, "title": "Huawei P8 lite" }, { "categoryId": 1, "productId": 8, "title": "Samsung Galaxy S1000 mini" }, { "categoryId": 1, "productId": 9, "title": "Microsoft Lumia" }, { "categoryId": 1, "productId": 10, "title": "Sony Iksp\u00edria" }, { "categoryId": 1, "productId": 11, "title": "Fieldman FZV 4001-E" }]);
productMap.set(2, [{ "categoryId": 2, "productId": 12, "title": "Fieldman FZV 4005-F" }, { "categoryId": 2, "productId": 13, "title": "Fiskars Quickfit A" }, { "categoryId": 2, "productId": 14, "title": "Fiskars Quickfit B" }, { "categoryId": 2, "productId": 15, "title": "Hecht 1538" }, { "categoryId": 2, "productId": 16, "title": "Hecht 2679" }, { "categoryId": 2, "productId": 17, "title": "Hecht 10000000 deLuxe" }, { "categoryId": 2, "productId": 18, "title": "D\u017eon d\u00fdr SoilDestroyer 2000 nitro" }, { "categoryId": 2, "productId": 19, "title": "D\u017eon d\u00fdr Tr\u00e1vn\u00edkMaker 1937 turbo" }]);
productMap.set(3, [{ "categoryId": 3, "productId": 20, "title": "Anatolian TS China 18\"" }, { "categoryId": 3, "productId": 21, "title": "Anatolian BS Splash 10\"" }, { "categoryId": 3, "productId": 22, "title": "Anatolian EMS Light Crash 16\"" }, { "categoryId": 3, "productId": 23, "title": "Yamaha YFG 812 CII" }, { "categoryId": 3, "productId": 24, "title": "Yamaha YFG 811 II" }, { "categoryId": 3, "productId": 25, "title": "Amati ABN 36" }, { "categoryId": 3, "productId": 26, "title": "Stagg M20" }, { "categoryId": 3, "productId": 27, "title": "Stagg M50 E" }, { "categoryId": 3, "productId": 28, "title": "Stagg M40 S" }]);

const mockOfferArr = [
    { "description": null, "img_url": "https://im9.cz/iR/importprodukt-orig/58f/58f0e6512d7f1563354e2fbb9568f2b8.jpg", "offerId": 1, "price": 16620.0, "productId": 1, "title": "V\u00fdprodej: Apple Fenomen\u00e1ln\u00ed iPhone 6 + Doprava zdarma", "url": "http://randomEshop11554.cz/product/63417" },
    { "description": null, "img_url": null, "offerId": 2, "price": 16481.0, "productId": 1, "title": "Legend\u00e1rn\u00ed Apple iPhone 6 + D\u00e1rek", "url": "http://randomEshop13760.cz/product/46692" },
    { "description": null, "img_url": null, "offerId": 3, "price": 16099.0, "productId": 1, "title": "Apple iPhone 6 + D\u00e1rek", "url": "http://randomEshop34697.cz/product/42331" },
    { "description": "Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.", "img_url": null, "offerId": 4, "price": 15682.0, "productId": 1, "title": "Takakor\u00e1tn\u00ed iPhone 6", "url": "http://randomEshop5779.cz/product/35750" },
    { "description": "Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.", "img_url": null, "offerId": 5, "price": 15537.0, "productId": 1, "title": "V\u00fdprodej: Mega\u00fa\u017easn\u00fd Apple iPhone 6 + Bal\u00f3nek", "url": "http://randomEshop8367.cz/product/42042" }
];

export { categoryArr, productMap, mockOfferArr };