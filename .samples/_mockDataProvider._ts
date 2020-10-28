import { ProductDetail } from "../model/productDetail";
import { IPageResult } from "../model/iPageResult";
import { Category } from "../model/category.model";
import { Offer } from "../model/offer.model";
import { IProductDetail } from "../model/iProductDetail";
import { Logger } from "./logger";
import { categoryArr, mockOfferArr, productMap } from "./mockData";


const log = new Logger({
    name: "MockDataProvider",
});

export class MockDataProvider {

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

    private static async getOffers(pProductId: number): Promise<Offer[]> {
        log.debug(`getOffers(${pProductId})`);
        return mockOfferArr.map((o) => new Offer(o));
    }

    public async getProductPage(pCategoryId: number, pLimit: number, pOffset: number): Promise<IPageResult<ProductDetail>> {
        log.debug(`getProductPage(${pCategoryId})`);
        const pageSize = pLimit;

        // `/products/${pCategoryId}/count/`  --> 11
        const products = productMap.get(pCategoryId);
        if (!products) {
            throw new Error("Product does not exists");
        }
        const productPage = products.slice(pOffset, pOffset + pageSize);

        const productDetails = await Promise.all(
            productPage.map(async (p) => {
                const offers = await MockDataProvider.getOffers(p.productId);
                const offerDetails = MockDataProvider.computeProductDetail(offers);
                const productDetail = new ProductDetail(p, offerDetails);
                return productDetail;
            })
        );
        return ({
            offset: pOffset,
            pageSize,
            count: products.length,
            items: productDetails
        } as IPageResult<ProductDetail>);
    }

    public getCategories(): Promise<Category[]> {
        return Promise.resolve(categoryArr.map((c) => new Category(c)));
    }
}