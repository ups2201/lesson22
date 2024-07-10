export class Category {
    id: number;
    code: Codes;
    name: string;
    subCategory: Array<Category>;

    constructor(id: number, code: Codes, name: string, subCategory?: Array<Category>) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.subCategory = subCategory;
    }
}