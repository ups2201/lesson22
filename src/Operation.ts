export class Operation {
    id: number;
    code: string;
    date: Date;
    sum: number;
    type: CashTransaction;

    constructor(id: number, code: string, date: Date, sum: number, type: CashTransaction) {
        this.id = id;
        this.code = code;
        this.date = date;
        this.sum = sum;
        this.type = type;
    }
}