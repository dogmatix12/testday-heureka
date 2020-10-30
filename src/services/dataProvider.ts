import { ProductDetail } from "../model/productDetail";
import { Category } from "../model/category.model";
import { IPageResult } from "../model/iPageResult";
import { Offer } from "../model/offer.model";
import { Logger } from "./logger";
import { RestAPIFetcher } from "./restAPIFetcher";
import { CONFIG } from "../config";

const log = new Logger({
    name: "DataProvider",
});

export class DataProvider {

    private readonly fetcher: RestAPIFetcher;

    constructor() {
        this.fetcher = new RestAPIFetcher(CONFIG.CATALOGUE_API_URI);
    }

    private async getOffers(pProductId: number): Promise<Offer[]> {
        log.debug(`getOffers(${pProductId})`);

        // `/offers/${pProductId}/count/`  not used, all offers must be fetched to compute min/max price
        const offers = await this.fetcher.getOffers(pProductId);
        return offers;
    }


    public async getProduct(pProductId: number): Promise<ProductDetail> {
        log.debug(`getProduct(${pProductId})`);

        // get Products for page and total count
        const product = await this.fetcher.getProduct(pProductId);
        if (!product) {
            throw new Error("Product does not exists");
        }
        const offers = await this.getOffers(product.productId);
        const productDetail = new ProductDetail(product, offers);
        return productDetail;
    }

    public async getProductPage(pCategoryId: number, pLimit: number, pOffset: number): Promise<IPageResult<ProductDetail>> {
        log.debug(`getProductPage(${pCategoryId})`);

        // get Products for page and total count
        const products = await this.fetcher.getProductsPage(pCategoryId, pLimit, pOffset);
        if (!products) {
            throw new Error("Product does not found for category");
        }
        const productDetails = await Promise.all(
            products.items.map(async (p) => {
                const offers = await this.getOffers(p.productId);
                const productDetail = new ProductDetail(p, offers);
                return productDetail;
            })
        );
        return ({
            offset: pOffset,
            pageSize: pLimit,
            count: products.count,
            items: productDetails
        } as IPageResult<ProductDetail>);
    }

    public async getCategories(): Promise<Category[]> {
        return this.fetcher.getCategories();
    }
}