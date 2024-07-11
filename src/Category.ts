export class Category {
  id: number;
  codes: Set<number>;
  name: string;

  constructor(id: number, code: Set<number>, name: string) {
    this.id = id;
    this.codes = code;
    this.name = name;
  }
}
