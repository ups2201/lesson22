import {describe, expect, test} from '@jest/globals';
import {getOperationFromPeriod, getFullMapCategoryForPeriod} from "./index.ts";
import {Operation} from "./Operation";
import {CashTransaction} from "./CashTransaction";

describe('sum module', () => {

    beforeEach(() => {
        // initializeCityDatabase();
        jest.restoreAllMocks();
    });

    test('Проверка получения операций за указанный период', () => {
        const startDate = new Date("2024-01-01T00:00:00");
        const endDate = new Date("2024-06-01T00:00:00");

        const expectedResult = new Array<Operation>();
        expectedResult.push(new Operation(8, 444,  new Date("2024-02-02T10:08:00"), 2300, CashTransaction.OUTCOME));
        expectedResult.push(new Operation(9, 444,  new Date("2024-03-01T10:09:00"), 2300, CashTransaction.OUTCOME));

        expect(getOperationFromPeriod(startDate, endDate)).toEqual(expectedResult);
    });

});