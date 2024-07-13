import { IStorage } from "./IStorage";
import { Task } from "./Task";

export interface ICalendar {
  create(element: HTMLElement);
  getTask(id: string): Promise<Task>;
  getAllTasks(): Promise<Set<Task>>;
  addTask(task: Task);
  updateTask(task: Task);
  removeTask(task: Task);
}

export class Calendar implements ICalendar {
  element: HTMLElement;
  storage: IStorage;

  constructor(element: HTMLElement, storage: IStorage) {
    this.element = element;
    this.storage = storage;
  }

  getTask(id: string): Promise<Task> {
    return this.storage.getItem(id);
  }

  addTask(task: Task) {
    this.storage.setItem(task.id.toString(), task);
  }

  create(element: HTMLElement) {
    document.append(element);
  }

  removeTask(task: Task) {
    this.storage.removeItem(task.id.toString());
  }

  getAllTasks(): Promise<Set<Task>> {
    return this.storage.getItem("");
  }

  updateTask(task: Task) {
    this.storage.updateItem(task.id.toString(), task);
  }
}
