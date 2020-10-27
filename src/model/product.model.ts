export class Product {
    public readonly categoryId: number;
    public readonly productId: number;
    public readonly title: string;

    constructor( model: {
        categoryId: number,
        productId: number,
        title: string
    }) {
        this.categoryId = model.categoryId;
        this.productId = model.productId;
        this.title = model.title;
    }
}
