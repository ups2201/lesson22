import { IStorage } from "./IStorage";

export class LocalStorage implements IStorage {
  async getItem(key: string): Promise<any> {
    return JSON.parse(window.localStorage.getItem(key));
  }

  setItem(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
