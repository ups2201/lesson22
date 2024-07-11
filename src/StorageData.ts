import {Operation} from "./Operation";
import {Category} from "./Category";

export interface IStorageData {
    getOperationById(id: number): Operation;
    getOperationsAll(): Array<Operation>;
    getOperationFromDate(startDate: Date, endDate: Date): Array<Operation>;
    getCategoryById(id: number): Category;
    getCategoriesAll(): Array<Category>;
}

export class StorageData implements IStorageData {
    operations: Array<Operation>;
    categories: Array<Category>;

    constructor(operations: Array<Operation>, categories: Array<Category>) {
        this.operations = operations;
        this.categories = categories;
    }

    getCategoriesAll(): Array<Category> {
        return this.categories;
    }

    getOperationsAll(): Array<Operation> {
        return this.operations;
    }

    getCategoryById(id: number): Category {
        return undefined;
    }

    getOperationById(id: number): Operation {
        return undefined;
    }

    getOperationFromDate(startDate: Date, endDate: Date): Array<Operation> {
        return undefined;
    }

}