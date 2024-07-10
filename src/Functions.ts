import {Operation} from "./Operation";
import {Category} from "./Category";
import {StorageData} from "./StorageData";

const storageData = new StorageData();
const allCategories: Array<Category> = storageData.getCategoriesAll();
const allOperations: Array<Operation> = storageData.getOperationsAll();

//расход по категориям из диапозона дат
function getSumMapFromCategory(startDate: Date, endDate: Date): Map<Category, Number> {
    let map: Map<Category, Array<Operation>> = getOutcomeCashCategoryForPeriod(startDate, endDate);

    const resultMap = new Map<Category, Number>;
    map.forEach((value,key) => {
        let sum = value.map(o => o.sum).reduce((accumulator, currentValue) => accumulator + currentValue);
        resultMap.set(key, sum);
    })
    return resultMap;
}

//расход по датам из диапазона
function getConsumptionByDatesFromRange(startDate: Date, endDate: Date) {
    let listOperations: Array<Operation> = getOperationFromPeriod(startDate, endDate);

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
function getOutcomeCashCategoryForPeriod(startDate: Date, endDate: Date): Map<Category, Array<Operation>> {
    let resultMap = new Map();
    let listOperation = getOperationFromPeriod(startDate, endDate);
    allCategories.forEach((category) => {
        let list = new Set<Operation>();
        category.codes.forEach(code =>
            listOperation
                .filter(operation => code = operation.code)
                .forEach(o => list.add(o))
        );
        resultMap.set(category, list)
    })

    return resultMap;
}

//Возвращаем все категории которые содержат определённый код операции
function getCategoriesContainsCode(code: number): Array<Category> {
    return allCategories.filter(category => category.codes.has(code));
}

//Получаем список кодов расходных операций за определённый период
function getOutcomeCashCategoriesCodeFromPeriod(categoryName: string, startDate: Date, endDate: Date): Set<Number> {
    return new Set(allOperations
        .filter(operation => operation.type === CashTransaction.OUTCOME)
        .filter(operation => operation.date > startDate)
        .filter(operation => operation.date < endDate)
        .map(operation => operation.code));
}

function getOperationFromPeriod(startDate: Date, endDate: Date): Array<Operation> {
    return Array.from(allOperations
        .filter(operation => operation.date > startDate)
        .filter(operation => operation.date < endDate));
}

//Сумма по операциям
function getSumOperations(listOperations: Array<Operation>): number {
    return listOperations
        .map(operation => operation.sum)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

//сортировка категорий по сумме за указанный диапозон дат
function sortCategoryForPeriod(startDate: Date, endDate: Date): Map<Category, Number> {
    const map: Map<Category, Array<Operation>> = getOutcomeCashCategoryForPeriod(startDate, endDate);

    const resultMap: Map<Category, Number> = new Map();
    map.forEach((value, key) => resultMap.set(key, getSumOperations(value)));

    return new Map([...resultMap.entries()].sort((a, b) => b[1] - a[1]));
}
