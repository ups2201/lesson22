import {Operation} from "./Operation";
import {Category} from "./Category";
import {StorageData} from "./StorageData";
import {CashTransaction} from "./CashTransaction";

const storageData = new StorageData();
const allCategories: Array<Category> = storageData.getCategoriesAll();
const allOperations: Array<Operation> = storageData.getOperationsAll();
// const map: Map<Category, Array<Operation>> = getFullMapCategoryForPeriod(listOperations, allCategories, startDate, endDate);

//расход по категориям из диапозона дат
export function getSumMapFromCategory(map: Map<Category, Array<Operation>>, startDate: Date, endDate: Date): Map<Category, Number> {
    const resultMap = new Map<Category, Number>;
    map.forEach((value,key) => {
        let sum = Array.from(value).map(o => o.sum).reduce((accumulator, currentValue) => accumulator + currentValue);
        resultMap.set(key, sum);
    })
    return resultMap;
}

//расход по датам из диапазона
export function getConsumptionByDatesFromRange(listOperations: Array<Operation>, startDate: Date, endDate: Date) {
    //Получаем только расходные
    const resultMap = new Map<Date, Number>;

    let dateList = new Set(listOperations
        .filter(operation => operation.type === CashTransaction.OUTCOME)
        .map(o => o.date));

    dateList.forEach(date => {
        let sum = listOperations
            .filter(operation => operation.date === date)
            .map(operation => operation.sum)
            .reduce((accumulator, currentValue) => accumulator + currentValue);

        resultMap.set(date, sum);
    });

    return resultMap;
}

// Полная мапа, связка категорий и списка операций
export function getFullMapCategoryForPeriod(listOperations: Array<Operation>, allCategories: Array<Category>, startDate: Date, endDate: Date): Map<Category, Array<Operation>> {
    let resultMap = new Map();
    allCategories.forEach((category) => {
        let list = new Set<Operation>();
        category.codes.forEach(code =>
            listOperations
                .filter(operation => code === operation.code)
                .forEach(o => list.add(o))
        );
        resultMap.set(category, list)
    })

    return resultMap;
}

//Возвращаем все категории которые содержат определённый код операции
export function getCategoriesContainsCode(allCategories: Array<Category>, code: number): Array<Category> {
    return allCategories.filter(category => category.codes.has(code));
}

//Получаем список кодов расходных операций за определённый период
export function getOutcomeCashCategoriesCodeFromPeriod(listOperations: Array<Operation>, categoryName: string, startDate: Date, endDate: Date): Set<Number> {
    return new Set(listOperations
        .filter(operation => operation.type === CashTransaction.OUTCOME)
        .filter(operation => operation.date > startDate)
        .filter(operation => operation.date < endDate)
        .map(operation => operation.code));
}

export function getOperationFromPeriod(listOperations: Array<Operation>, startDate: Date, endDate: Date): Array<Operation> {
    return Array.from(listOperations
        .filter(operation => operation.date > startDate)
        .filter(operation => operation.date < endDate));
}

//Сумма по операциям
export function getSumOperations(listOperations: Array<Operation>): number {
    return listOperations
        .map(operation => operation.sum)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

//сортировка категорий по сумме за указанный диапозон дат
export function sortCategoryForPeriod(map: Map<Category, Array<Operation>>, startDate: Date, endDate: Date): Map<Category, Number> {
    const resultMap: Map<Category, Number> = new Map();
    map.forEach((value, key) => resultMap.set(key, getSumOperations(value)));

    return new Map([...resultMap.entries()].sort((a, b) => b[1] - a[1]));
}
