import { IStorage } from "./IStorage";

export class LocalStorage implements IStorage {
  namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  async getItem(key: string): Promise<any> {
    return JSON.parse(window.localStorage.getItem(this.namespace + key));
  }

  setItem(key: string, value: any): void {
    window.localStorage.setItem(this.namespace + key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(this.namespace + key);
  }

}
