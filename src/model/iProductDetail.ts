import { Offer } from "./offer.model";

export interface IProductDetail {
    description: string | null;
    min: number | null;
    max: number | null;

    offers: Offer[];
}