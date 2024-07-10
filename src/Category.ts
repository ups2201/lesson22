export class Category {
    id: number;
    codes: Set<Number>;
    name: string;

    constructor(id: number, code: Set<Number>, name: string) {
        this.id = id;
        this.codes = code;
        this.name = name;
    }
}