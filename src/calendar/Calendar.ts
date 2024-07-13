import { IStorage } from "./MyStorage";

export interface ICalendar {
  create();
  read();
  update();
  delete();
}

export class CalendarDay {
  date: Date;
  tags: Set<string>;
  status: string;
  text: string;

  constructor(date: Date, tags?: Set<string>, status?: string, text?: string) {
    this.date = date;
    this.tags = tags;
    this.status = status;
    this.text = text;
  }
}

export class Calendar implements ICalendar {
  storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  create() {}

  delete() {}

  read() {
    return this.storage.getItems();
  }

  update() {}
}
