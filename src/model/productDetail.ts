import { IProductDetail } from "./iProductDetail";
import { Offer } from "./offer.model";
import { Product } from "./product.model";

import { CONFIG } from "../config";

// Product extended by data aggregated from offers
export class ProductDetail extends Product implements IProductDetail {
    public static readonly SHORT_DESC_LEN = 150;

    public readonly offers: Offer[];
    public readonly description: string | null;      // first not*null value from offers
    public readonly min: number | null;              // min price from offers
    public readonly max: number | null;              // max price from offers

    // Data formater (for simplicity, included directly in the class)
    get shortDescription(): string | null {
        if ((this.description?.length || 0) > ProductDetail.SHORT_DESC_LEN) {
            return this.description?.substring(0, ProductDetail.SHORT_DESC_LEN) + '...'; // max 150 chars;
        } else {
            return this.description;
        }
    }

    get priceRange(): string {
        return `${this.min} - ${this.max} ${CONFIG.I18N.CURRENCY_SYMBOL}`;
    }

    public constructor(pModel: Product, pDetail: IProductDetail) {
        super(pModel);

        this.description = pDetail.description;
        this.min = pDetail.min;
        this.max = pDetail.max;
        this.offers = pDetail.offers;
    }

}