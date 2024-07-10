import {Operation} from "./Operation";
import {Category} from "./Category";

export interface IStorageData {
    getOperationById(id: number): Operation;
    getOperationsAll(): Array<Operation>;
    getOperationFromDate(startDate: Date, endDate: Date): Array<Operation>;
    getCategoryById(id: number): Operation;
    getCategoryByCode(code: Codes): Operation;
    getCategoriesAll(): Array<Category>;
}

export class StorageData implements IStorageData {
    operations: Array<Operation>;
    categories: Array<Category>;

    constructor() {
        const operations = new Array<Operation>();
        operations.push(new Operation(1, "MCC1", new Date(2024, 7, 7, 10,0,0), 101, CashTransaction.OUTCOME));
        operations.push(new Operation(2, "MCC1", new Date(2024, 7, 8, 10,0,0), 102, CashTransaction.OUTCOME));
        operations.push(new Operation(3, "MCC1", new Date(2024, 7, 9, 10,0,0), 103, CashTransaction.OUTCOME));
        operations.push(new Operation(4, "MCC7", new Date(2024, 6, 7, 10,0,0), 1000, CashTransaction.INCOME));
        operations.push(new Operation(5, "MCC7", new Date(2024, 7, 7, 10,0,0), 2000, CashTransaction.INCOME));
        operations.push(new Operation(6, "MCC3", new Date(2024, 7, 7, 10,0,0), 105, CashTransaction.OUTCOME));
        operations.push(new Operation(7, "MCC3", new Date(2024, 6, 7, 10,0,0), 106, CashTransaction.OUTCOME));
        this.operations = operations;

        const categories = new Array<Category>();
        categories.push(new Category(1, Codes.MCC1, "Расходы на еду"));
        categories.push(new Category(2, Codes.MCC2, "Топливо"));
        categories.push(new Category(3, Codes.MCC7, "Зарплата"));

        const listSubCategories = new Array<Category>();
        listSubCategories.push(new Category(6, Codes.MCC6, "Вода"));
        listSubCategories.push(new Category(7, Codes.MCC6, "Свет"));
        listSubCategories.push(new Category(8, Codes.MCC6, "Отопление"));
        categories.push(new Category(9, Codes.MCC7, "ЖКХ", listSubCategories));

        this.categories = categories;
    }

    getCategoriesAll(): Array<Category> {
        return this.categories;
    }

    getOperationsAll(): Array<Operation> {
        return this.operations;
    }

    getCategoryByCode(code: Codes): Operation {
        return undefined;
    }

    getCategoryById(id: number): Operation {
        return undefined;
    }

    getOperationById(id: number): Operation {
        return undefined;
    }

    getOperationFromDate(startDate: Date, endDate: Date): Array<Operation> {
        return undefined;
    }

}