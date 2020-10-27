import { ProductDetail } from "../model/productDetail";
import { Category } from "../model/category.model";
import { IPageResult } from "../model/iPageResult";
import { Offer } from "../model/offer.model";
import { Logger } from "./logger";
import { categoryArr, mockOfferArr, productMap } from "./mockData";
import { IProductDetail } from "model/iProductDetail";


const log = new Logger({
    name: "DataProvider",
});

export class DataProvider {
    private static readonly PRODUCT_PAGE_SIZE = 5;

    private static async getOffers(pProductId: number): Promise<Offer[]> {
        log.debug(`getOffers(${pProductId})`);


        return mockOfferArr.map( (o) => new Offer(o)); 
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

    public async getProduct(pProductId: number): Promise<ProductDetail> {
        log.debug(`getProduct(${pProductId})`);

        const products = productMap.get(1);
        if (!products) {
            throw new Error("Product does not exists");
        }
        const p = products[0];
        const offers = await DataProvider.getOffers(p.productId);

        const offerDetails = DataProvider.computeProductDetail(offers);
        const productDetail = new ProductDetail(p, offerDetails);
        return productDetail;
    }

    public async getProductPage(pCategoryId: number, limit: number, pOffset: number): Promise<IPageResult<ProductDetail>> {
        log.debug(`getProductPage(${pCategoryId})`);
        // `/products/${pCategoryId}/count/`  --> 11
        const products = productMap.get(pCategoryId);
        if (!products) {
            throw new Error("Product does not exists");
        }
        const productPage = products.slice(pOffset, pOffset + DataProvider.PRODUCT_PAGE_SIZE);

        const productDetails = await Promise.all(
            productPage.map(async (p) => {
                const offers = await DataProvider.getOffers(p.productId);
                const offerDetails = DataProvider.computeProductDetail(offers);
                const productDetail = new ProductDetail(p, offerDetails);
                return productDetail;
            })
        );
        return ({
            offset: pOffset,
            pageSize: DataProvider.PRODUCT_PAGE_SIZE,
            count: products.length,
            items: productDetails
        } as IPageResult<ProductDetail>);
    }

    public getCategories(): Promise<Category[]> {
        return Promise.resolve(categoryArr);
    }
}