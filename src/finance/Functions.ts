import { Operation } from "./Operation";
import { Category } from "./Category";
import { StorageData } from "./StorageData";
import { CashTransaction } from "./CashTransaction";
import { CalendarDay, LocalStorage } from "../calendar/Calendar";

//расход по категориям из диапозона дат
export function getSumMapFromCategory(
  map: Map<Category, Array<Operation>>,
  startDate: Date,
  endDate: Date,
): Map<string, number> {
  const resultMap = new Map<string, number>();
  map.forEach((operationsInCategory, key) => {
    const sum = Array.from(operationsInCategory)
      .filter((operation) => operation.type === CashTransaction.OUTCOME)
      .filter((operation) => operation.date > startDate)
      .filter((operation) => operation.date < endDate)
      .map((o) => o.sum)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    resultMap.set(key.name, sum);
  });
  return resultMap;
}

//расход по датам из диапазона
export function getConsumptionByDatesFromRange(
  listOperations: Array<Operation>,
  startDate: Date,
  endDate: Date,
): Map<Date, number> {
  //Получаем только расходные
  const resultMap = new Map<Date, number>();
  const dateList = [];
  dateList.push(startDate);

  const dateTemp: Date = new Date(startDate);
  while (dateTemp < endDate) {
    dateTemp.setDate(dateTemp.getDate() + 1);
    dateList.push(new Date(dateTemp));
  }

  dateList.forEach((date) => {
    const startDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0,
      0,
    );
    const endDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      0,
    );
    const sum = listOperations
      .filter(
        (operation) => operation.date >= startDay && operation.date <= endDay,
      )
      .map((operation) => operation.sum)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (date >= startDate && date <= endDate) {
      resultMap.set(date, sum);
    } else {
      resultMap.set(date, 0);
    }
  });
  return resultMap;
}

// Полная мапа, связка категорий и списка операций
export function getFullMapCategoryForPeriod(
  listOperations: Array<Operation>,
  allCategories: Array<Category>,
  startDate: Date,
  endDate: Date,
): Map<Category, Array<Operation>> {
  const resultMap = new Map();
  allCategories.forEach((category) => {
    const list = new Set<Operation>();
    category.codes.forEach((code) =>
      listOperations
        .filter((operation) => code === operation.code)
        .forEach((o) => list.add(o)),
    );
    resultMap.set(category, list);
  });

  return resultMap;
}

//Возвращаем все категории которые содержат определённый код операции
export function getCategoriesContainsCode(
  allCategories: Array<Category>,
  code: number,
): Array<Category> {
  return allCategories.filter((category) => category.codes.has(code));
}

//Получаем список кодов расходных операций за определённый период
export function getOutcomeCashCategoriesCodeFromPeriod(
  listOperations: Array<Operation>,
  categoryName: string,
  startDate: Date,
  endDate: Date,
): Set<number> {
  return new Set(
    listOperations
      .filter((operation) => operation.type === CashTransaction.OUTCOME)
      .filter((operation) => operation.date > startDate)
      .filter((operation) => operation.date < endDate)
      .map((operation) => operation.code),
  );
}

export function getOperationFromPeriod(
  listOperations: Array<Operation>,
  startDate: Date,
  endDate: Date,
): Array<Operation> {
  return Array.from(
    listOperations
      .filter((operation) => operation.date > startDate)
      .filter((operation) => operation.date < endDate),
  );
}

//Сумма по операциям
export function getSumOperations(listOperations: Array<Operation>): number {
  console.log(listOperations);
  return Array.from(listOperations)
    .map((operation) => operation.sum)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//сортировка категорий по сумме за указанный диапозон дат
export function sortCategoryForPeriod(
  map: Map<Category, Array<Operation>>,
  startDate: Date,
  endDate: Date,
): Map<string, number> {
  const resultMap: Map<string, number> = new Map();
  map.forEach((value, key) => resultMap.set(key.name, getSumOperations(value)));

  return new Map([...resultMap.entries()].sort((a, b) => b[1] - a[1]));
}

const ls: LocalStorage = new LocalStorage();
const day = new CalendarDay(new Date(Date.now()));
ls.setItem("1", day);
console.log(ls.getItem("1"));
