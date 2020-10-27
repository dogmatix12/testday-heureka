
export interface IPageResult<T> {
    offset: number;
    pageSize: number;
    count: number;
    items: T[];
}
