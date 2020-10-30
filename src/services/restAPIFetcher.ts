import { IPageResult } from "../model/iPageResult";
import { Category } from "../model/category.model";
import { Product } from "../model/product.model";
import { Offer } from "../model/offer.model";
import { HttpFetcher } from "./http/httpFetcher";
import { Logger } from "./logger";

import { HttpsAgent } from "agentkeepalive";

const log = new Logger({
    name: "RestAPIFetcher",
});

export class RestAPIFetcher {

    private keepaliveAgent: HttpsAgent;
    private options: {
        //method: 'GET',
        //agent: AgentKeepAlive,
    };

    constructor(private baseURI: string) {
        this.keepaliveAgent = new HttpsAgent({
            keepAlive: true,
            maxSockets: 100,
            maxFreeSockets: 10,
            timeout: 60_000, // active socket keepalive for 60 seconds
            freeSocketTimeout: 30_000, // free socket keepalive for 30 seconds
        });

        this.options = {
            method: 'GET',
            timeout: 60_000,
            agent: this.keepaliveAgent
        };
    }


    public async getOffers(pProductId: number): Promise<Offer[]> {
        log.debug('Call getOffers()');

        // https://heureka-testday.herokuapp.com/offers/{productId}
        let url = this.baseURI;
        url += `/offers/${pProductId}/`;

        const offers = await HttpFetcher.fetchJSON<Offer[]>(url, this.options);
        return offers.map((o) => new Offer(o));
    }

    public async getCategories(): Promise<Category[]> {
        log.debug('Call getCategories()');

        // https://heureka-testday.herokuapp.com/categories/
        let url = this.baseURI;
        url += '/categories/';

        const categories = await HttpFetcher.fetchJSON<Category[]>(url, this.options);
        return categories.map((c) => new Category(c));
    }

    public async getProduct(pProductId: number): Promise<Product> {
        log.debug('Call getProduct()');

        // https://heureka-testday.herokuapp.com/product/{productId}/
        let url = this.baseURI;
        url += `/product/${pProductId}/`;

        const product = await HttpFetcher.fetchJSON<Product>(url, this.options);
        return new Product(product);
    }

    public async getProductsPage(pCategoryId: number, pLimit: number, pOffset: number): Promise<IPageResult<Product>> {
        log.debug('Call getProductsPage()');

        // /products/{categoryId}/{offset}/{limit}/
        let url = this.baseURI;
        url += `/products/${pCategoryId}/${pOffset}/${pLimit}/`;

        // /products/categoryId/count
        let countUrl = this.baseURI;
        countUrl += `/products/${pCategoryId}/count/`;

        const [products, productsCount] = await Promise.all([
            HttpFetcher.fetchJSON<Product[]>(url, this.options),
            HttpFetcher.fetchJSON<{ count: number }>(countUrl, this.options)
        ]);
        return ({
            offset: pOffset,
            pageSize: pLimit,
            count: Number(productsCount.count),
            items: products.map((p) => new Product(p))
        } as IPageResult<Product>);
    }

}