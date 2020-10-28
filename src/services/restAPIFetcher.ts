import { IPageResult } from "../model/iPageResult";
import { Category } from "../model/category.model";
import { Product } from "../model/product.model";
import { Offer } from "../model/offer.model";
import { HttpFetcher } from "./http/httpFetcher";
import { Logger } from "./logger";


const log = new Logger({
    name: "RestAPIFetcher",
});

export class RestAPIFetcher {
    
    constructor(private baseURI: string) { }

    public async getOffers(pProductId: number): Promise<Offer[]> {
        log.debug('Call getOffers()');
        const options = {
            method: 'GET',
        };

        // https://heureka-testday.herokuapp.com/offers/{productId}
        let url = this.baseURI;
        url += `/offers/${pProductId}`;

        const offers = await HttpFetcher.fetchJSON<Offer[]>(url, options);
        log.debug('Call getOffers() - done');
        return offers.map((o) => new Offer(o));
    }

    public async getCategories(): Promise<Category[]> {
        log.debug('Call getCategories()');
        const options = {
            method: 'GET',
        };

        // https://heureka-testday.herokuapp.com/categories/
        let url = this.baseURI;
        url += '/categories';
       
        const categories = await HttpFetcher.fetchJSON<Category[]>(url, options);
        return categories.map((c) => new Category(c));
    }

    public async getProduct(pProductId: number): Promise<Product> {
        log.debug('Call getProduct()');
        const options = {
            method: 'GET',
        };

        // https://heureka-testday.herokuapp.com/product/{productId}/
        let url = this.baseURI;
        url += `/product/${pProductId}`;
       
        const product = await HttpFetcher.fetchJSON<Product>(url, options);
        return new Product(product);
    }

    public async getProductsPage(pCategoryId: number, pLimit: number, pOffset: number): Promise<IPageResult<Product>> {
        log.debug('Call getProductsPage()');
        const options = {
            method: 'GET',
        };
        // /products/{categoryId}/{offset}/{limit}/
        let url = this.baseURI;
        url += `/products/${pCategoryId}/${pOffset}/${pLimit}`;

        // /products/categoryId/count
        let countUrl = this.baseURI;
        countUrl += `/products/${pCategoryId}/count`;

        const [products, productsCount] = await Promise.all([
            HttpFetcher.fetchJSON<Product[]>(url, options),
            HttpFetcher.fetchJSON<number>(countUrl, options)
        ]);
        return ({
            offset: pOffset,
            pageSize: pLimit,
            count: productsCount,
            items: products.map((p) => new Product(p))
        } as IPageResult<Product>);
    }

}