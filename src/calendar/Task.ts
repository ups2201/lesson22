export class Task {
  id: number;
  date: number;
  tags: [string];
  status: string;
  text: string;

  constructor(
    id: number,
    date: Date,
    tags?: [string],
    status?: string,
    text?: string,
  ) {
    this.id = id;
    this.date = date.getTime();
    this.tags = tags;
    this.status = status;
    this.text = text;
  }
}
