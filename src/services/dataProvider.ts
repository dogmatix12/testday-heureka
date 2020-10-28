import { ProductDetail } from "../model/productDetail";
import { Category } from "../model/category.model";
import { IPageResult } from "../model/iPageResult";
import { Offer } from "../model/offer.model";
import { IProductDetail } from "../model/iProductDetail";
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

    // itterate offers and set productDetail for getProductPage()
    private static computeProductDetail(pOffers: Offer[]): IProductDetail {
        const offerDetails = pOffers.reduce((acc, o) => {
            acc.max = (acc.max == undefined || o.price > acc.max) ? o.price : acc.max;
            acc.min = (acc.min == undefined || o.price < acc.min) ? o.price : acc.min;

            // get last valid description
            acc.description = o.description ? o.description : acc.description;
            return acc;
        }, {
            offers: pOffers,
            description: null,
            min: null,
            max: null
        } as IProductDetail);

        return offerDetails;
    }

    private async getOffers(pProductId: number): Promise<Offer[]> {
        log.debug(`getOffers(${pProductId})`);

        // `/offers/${pProductId}/count/`  --> 11
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

        const offerDetails = DataProvider.computeProductDetail(offers);
        const productDetail = new ProductDetail(product, offerDetails);
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
                console.time('getOffers_' + p.productId);
                const offers = await this.getOffers(p.productId);
                console.timeEnd('getOffers_' + p.productId);
                const offerDetails = DataProvider.computeProductDetail(offers);
                const productDetail = new ProductDetail(p, offerDetails);
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

    public getCategories(): Promise<Category[]> {
        return this.fetcher.getCategories();
    }
}