import { Offer } from "./offer.model";

export interface IProductDetail {
    description: string | null;     // one from offers

    img_urls: Set<string> | null;   // all from offers      

    min: number | null;
    max: number | null;

    offers: Offer[];
}