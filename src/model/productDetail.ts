import { IProductDetail } from "./iProductDetail";
import { Offer } from "./offer.model";
import { Product } from "./product.model";

// Product extended by data aggregated from offers
export class ProductDetail extends Product implements IProductDetail {
    public static readonly SHORT_DESC_LEN = 150;

    public description: string | null = null;                   // first not*null value from offers
    public img_urls: Set<string> = new Set<string>();    // all values from offers
    public min: number | null = null;              // min price from offers
    public max: number | null = null;              // max price from offers
    public readonly offers: Offer[];

    // Data formater (for simplicity, included directly in the class)
    // TODO: move to INTLFormaters
    get shortDescription(): string | null {
        if ((this.description?.length || 0) > ProductDetail.SHORT_DESC_LEN) {
            return this.description?.substring(0, ProductDetail.SHORT_DESC_LEN) + '...'; // max 150 chars;
        } else {
            return this.description;
        }
    }

    get mainImgUrl(): string | null {
        if (this.img_urls.size > 0) {
            return this.img_urls.values().next().value;
        }
        return null;
    }

    public constructor(pModel: Product, pOffers: Offer[]) {
        super(pModel);

        this.offers = pOffers;
        this.computeProductDetail();
    }


    // itterate offers and set productDetail for getProductPage()
    private computeProductDetail(): void {
        this.offers.forEach((o) => {
            this.max = (this.max == undefined || o.price > this.max) ? o.price : this.max;
            this.min = (this.min == undefined || o.price < this.min) ? o.price : this.min;

            // get last valid description
            this.description = o.description ? o.description : this.description;
            if (o.img_url) {
                this.img_urls.add(o.img_url);
            }
        });
    }
}