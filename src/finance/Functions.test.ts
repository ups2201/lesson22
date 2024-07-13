import { describe, expect, test } from "@jest/globals";
import {
  getOperationFromPeriod,
  getFullMapCategoryForPeriod,
  getSumMapFromCategory,
  getOutcomeCashCategoriesCodeFromPeriod,
  getSumOperations,
  sortCategoryForPeriod,
  getConsumptionByDatesFromRange,
} from "./Functions.ts";
import { Operation } from "./Operation";
import { CashTransaction } from "./CashTransaction";
import { Category } from "./Category";

describe("Функции", () => {
  let operations;
  let categories;

  beforeEach(() => {
    // initializeDatabase();
    operations = new Array<Operation>();
    operations.push(
      new Operation(
        1,
        111,
        new Date("2024-07-07T10:01:00"),
        101,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        2,
        111,
        new Date("2024-07-08T10:02:02"),
        102,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        3,
        111,
        new Date("2024-07-09T10:03:00"),
        103,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        4,
        777,
        new Date("2024-06-04T10:04:00"),
        1000,
        CashTransaction.INCOME,
      ),
    );
    operations.push(
      new Operation(
        5,
        777,
        new Date("2024-07-03T10:05:00"),
        2000,
        CashTransaction.INCOME,
      ),
    );
    operations.push(
      new Operation(
        6,
        333,
        new Date("2024-07-02T10:06:00"),
        105,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        7,
        333,
        new Date("2024-06-01T10:07:00"),
        106,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        7,
        333,
        new Date("2024-06-01T10:07:00"),
        106,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        7,
        333,
        new Date("2024-06-01T10:07:00"),
        106,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        8,
        444,
        new Date("2024-02-02T10:08:00"),
        2300,
        CashTransaction.OUTCOME,
      ),
    );
    operations.push(
      new Operation(
        9,
        444,
        new Date("2024-03-01T10:09:00"),
        2300,
        CashTransaction.OUTCOME,
      ),
    );

    categories = new Array<Category>();
    categories.push(new Category(1, new Set([111]), "Расходы на еду"));
    categories.push(new Category(2, new Set([555]), "Топливо"));
    categories.push(new Category(3, new Set([777]), "Зарплата"));
    categories.push(new Category(6, new Set([222]), "Вода"));
    categories.push(new Category(7, new Set([333]), "Свет"));
    categories.push(new Category(8, new Set([444]), "Отопление"));
    categories.push(new Category(9, new Set([222, 333, 444]), "ЖКХ"));

    jest.restoreAllMocks();
  });

  test("Проверка получения операций за указанный период", () => {
    const startDate = new Date("2024-01-01T00:00:00");
    const endDate = new Date("2024-06-01T00:00:00");

    const expectedResult = new Array<Operation>();
    expectedResult.push(
      new Operation(
        8,
        444,
        new Date("2024-02-02T10:08:00"),
        2300,
        CashTransaction.OUTCOME,
      ),
    );
    expectedResult.push(
      new Operation(
        9,
        444,
        new Date("2024-03-01T10:09:00"),
        2300,
        CashTransaction.OUTCOME,
      ),
    );

    expect(getOperationFromPeriod(operations, startDate, endDate)).toEqual(
      expectedResult,
    );
  });

  test("Проверка расход по категориям из диапозона дат", () => {
    const startDate = new Date("2024-01-01T00:00:00");
    const endDate = new Date("2024-06-01T23:59:00");

    const map: Map<Category, Array<Operation>> = getFullMapCategoryForPeriod(
      operations,
      categories,
      startDate,
      endDate,
    );
    const mapResult: Map<string, number> = getSumMapFromCategory(
      map,
      startDate,
      endDate,
    );
    const expectedResult = new Map<string, number>();
    expectedResult.set("Расходы на еду", 0);
    expectedResult.set("Топливо", 0);
    expectedResult.set("Зарплата", 0);
    expectedResult.set("Вода", 0);
    expectedResult.set("Свет", 318);
    expectedResult.set("Отопление", 4600);
    expectedResult.set("ЖКХ", 4918);

    const actual = getSumMapFromCategory(map, startDate, endDate);
    expect(actual).toEqual(expectedResult);
  });

  test("Сумма по всем операциям", () => {
    expect(getSumOperations(operations)).toEqual(8329);
  });

  test("Сортировка категорий по сумме за указанный диапозон дат", () => {
    const startDate = new Date("2024-01-01T00:00:00");
    const endDate = new Date("2024-12-01T23:59:00");
    const map: Map<Category, Array<Operation>> = getFullMapCategoryForPeriod(
      operations,
      categories,
      startDate,
      endDate,
    );

    const expectedResult = new Map<string, number>();
    expectedResult.set("ЖКХ", 5023);
    expectedResult.set("Отопление", 4600);
    expectedResult.set("Зарплата", 3000);
    expectedResult.set("Свет", 423);
    expectedResult.set("Расходы на еду", 306);
    expectedResult.set("Топливо", 0);
    expectedResult.set("Вода", 0);

    expect(sortCategoryForPeriod(map, startDate, endDate)).toStrictEqual(
      expectedResult,
    );
  });

  test("Расход по датам из диапазона", () => {
    const startDate = new Date("2024-07-06");
    const endDate = new Date("2024-07-11");

    const expectedResult = new Map<Date, number>();
    expectedResult.set(new Date("2024-07-06"), 0);
    expectedResult.set(new Date("2024-07-07"), 101);
    expectedResult.set(new Date("2024-07-08"), 102);
    expectedResult.set(new Date("2024-07-09"), 103);
    expectedResult.set(new Date("2024-07-10"), 0);
    expectedResult.set(new Date("2024-07-11"), 0);

    expect(
      getConsumptionByDatesFromRange(operations, startDate, endDate),
    ).toEqual(expectedResult);
  });

  test("Получаем список кодов расходных операций за определённый период", () => {
    const startDate = new Date("2024-01-01T00:00:00");
    const endDate = new Date("2024-06-01T23:59:00");

    expect(
      getOutcomeCashCategoriesCodeFromPeriod(
        operations,
        "ЖКХ",
        startDate,
        endDate,
      ),
    ).toEqual(new Set([333, 444]));
  });
});
