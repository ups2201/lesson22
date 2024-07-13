export interface IStorage {
  getItem(key: string): Promise<any>;
  setItem(key: string, value: any): Promise<void> | void;
}
