export class Category {
    public readonly categoryId: number;
    public readonly title: string;

    constructor( model: {
        categoryId: number,
        title: string
    }) {
        this.categoryId = model.categoryId;
        this.title = model.title;
    }
}
