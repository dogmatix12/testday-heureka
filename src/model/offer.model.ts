import { CONFIG } from "../config";

export class Offer {
    description: string | null;
    img_url: string | null;
    offerId: number;
    price: number;
    productId: number;
    title: string;
    url: string;

    constructor( model: {
        description: string | null;
        img_url: string | null;
        offerId: number,
        price: number,
        productId: number,
        title: string,
        url: string,
    }) {
        this.description = model.description;
        this.img_url = model.img_url;
        this.offerId = model.offerId;
        this.price = model.price;
        this.productId = model.productId;
        this.title = model.title;
        this.url = model.url;
    }

    // Data formater (for simplicity, included directly in the class)
    get priceWithCurrency(): string {
        return `${this.price} ${CONFIG.I18N.CURRENCY_SYMBOL}`;
    }
}

// https://heureka-testday.herokuapp.com/offers/3
/*
 {
     "description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.",
     "img_url":null,
     "offerId":12,
     "price":33888.0,
     "productId":3,
     "title":"Doprodej: Apple iPHone 5S Mega\u00fa\u017easn\u00fd + Bal\u00f3nek",
     "url":"http://randomEshop62282.cz/product/96327"
 },
 {"description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.",
 "img_url":"https://im9.cz/iR/importprodukt-orig/cf2/cf292a2388aa9598b948794a47705a92.jpg",
 "offerId":13,
 "price":33619.0,
 "productId":3,
 "title":"White Apple iPHone 5S",
 "url":"http://randomEshop70514.cz/product/50166"},
 {"description":null,
 "img_url":null,
 "offerId":14,
 "price":31818.0,
 "productId":3,
 "title":"V\u00fdprodej: iPHone 5S",
 "url":"http://randomEshop37350.cz/product/13073"},
 {"description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.",
 "img_url":"https://im9.cz/iR/importprodukt-orig/719/719cbb7f53feee082aa6a0e91a35a3c9.jpg",
 "offerId":15,
 "price":35224.0,
 "productId":3,
 "title":"Akce: Purple iPHone 5S + Doprava zdarma",
 "url":"http://randomEshop13974.cz/product/35048"},
 {"description":null,
 "img_url":null,
 "offerId":16,
 "price":37033.0,
 "productId":3,
 "title":"Legend\u00e1rn\u00ed iPHone 5S",
 "url":"http://randomEshop15083.cz/product/6276"},
 {"description":null,
 "img_url":null,
 "offerId":17,
 "price":34630.0,
 "productId":3,
 "title":"Black iPHone 5S",
 "url":"http://randomEshop88941.cz/product/46861"},
 {"description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.",
 "img_url":"https://im9.cz/iR/importprodukt-orig/719/719cbb7f53feee082aa6a0e91a35a3c9.jpg",
 "offerId":18,"price":31729.0,"productId":3,"title":"White iPHone 5S","url":"http://randomEshop8179.cz/product/91433"},
 {"description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.","img_url":null,"offerId":19,"price":37055.0,"productId":3,"title":"Mega\u00fa\u017easn\u00fd iPHone 5S + D\u00e1rek","url":"http://randomEshop47361.cz/product/84992"},
 {"description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.","img_url":"https://im9.cz/iR/importprodukt-orig/719/719cbb7f53feee082aa6a0e91a35a3c9.jpg","offerId":20,"price":32250.0,"productId":3,"title":"Akce: Fenomen\u00e1ln\u00ed iPHone 5S + Bal\u00f3nek","url":"http://randomEshop97740.cz/product/38684"},{"description":null,"img_url":"https://im9.cz/iR/importprodukt-orig/719/719cbb7f53feee082aa6a0e91a35a3c9.jpg","offerId":21,"price":32287.0,"productId":3,"title":"Novinka: Takakor\u00e1tn\u00ed iPHone 5S","url":"http://randomEshop56728.cz/product/34459"},{"description":"Mi niekto nie\u010do tak Bublina si v\u0161etko ako toto som ako Bublina do pa\u017ee ako keby dojebal to robil ke\u010f by si niekto bor\u0161\u010d? No ako keby on\u00e9 hento ale nem\u00e1m Internet. No ako keby dojebal on\u00e9. Po\u010dkaj do pa\u017ee keby dojebal on\u00e9. \u010co ja? Tak on\u00e9 \u010di \u010do som ako Bublina do pa\u017ee ako toto som dojebal on\u00e9 hento ale nem\u00e1m Internet. Kupi mi niekto bor\u0161\u010d? Tak on\u00e9 hento on\u00e9 hento ale nem\u00e1m ni\u010d. Tak no to ako keby bolo nie\u010do \u010do som zabil toto som ako toto som ako keby toto som dojebal to ako keby dojebal on\u00e9. Da mi niekto nie\u010do.","img_url":null,"offerId":22,"price":34384.0,"productId":3,"title":"V\u00fdprodej: Fenomen\u00e1ln\u00ed iPHone 5S","url":"http://randomEshop72900.cz/product/71403"},{"description":null,"img_url":null,"offerId":23,"price":37019.0,"productId":3,"title":"White iPHone 5S","url":"http://randomEshop25854.cz/product/7769"}]
 */