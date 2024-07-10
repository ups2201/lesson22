export class Category {
    id: number;
    code: number;
    name: string;
    subCategory: Category[];

    constructor(id: number, code: number, name: string, subCategory: Category[]) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.subCategory = subCategory;
    }

}