import {Operation} from "./Operation";
import {Category} from "./Category";
import {CashTransaction} from "./CashTransaction";

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

    constructor() {
        const operations = new Array<Operation>();

        operations.push(new Operation(1, 111,  new Date("2024-07-07T10:01:00"), 101, CashTransaction.OUTCOME));
        operations.push(new Operation(2, 111,  new Date("2024-07-08T10:02:02"), 102, CashTransaction.OUTCOME));
        operations.push(new Operation(3, 111,  new Date("2024-07-09T10:03:00"), 103, CashTransaction.OUTCOME));
        operations.push(new Operation(4, 777,  new Date("2024-06-04T10:04:00"), 1000, CashTransaction.INCOME));
        operations.push(new Operation(5, 777,  new Date("2024-07-03T10:05:00"), 2000, CashTransaction.INCOME));
        operations.push(new Operation(6, 333,  new Date("2024-07-02T10:06:00"), 105, CashTransaction.OUTCOME));
        operations.push(new Operation(7, 333,  new Date("2024-06-01T10:07:00"), 106, CashTransaction.OUTCOME));
        operations.push(new Operation(8, 444,  new Date("2024-02-02T10:08:00"), 2300, CashTransaction.OUTCOME));
        operations.push(new Operation(9, 444,  new Date("2024-03-01T10:09:00"), 2300, CashTransaction.OUTCOME));
        this.operations = operations;

        const categories = new Array<Category>();
        categories.push(new Category(1, new Set([111]), "Расходы на еду"));
        categories.push(new Category(2, new Set([555]), "Топливо"));
        categories.push(new Category(3, new Set([777]), "Зарплата"));
        categories.push(new Category(6, new Set([222]), "Вода"));
        categories.push(new Category(7, new Set([333]), "Свет"));
        categories.push(new Category(8, new Set([444]), "Отопление"));
        categories.push(new Category(9, new Set([222, 333, 444]), "ЖКХ"));

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