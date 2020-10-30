
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

}
