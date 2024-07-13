export interface IStorage {
  namespace: string;
  getItem(key: string): Promise<any>;
  setItem(key: string, value: any): Promise<void> | void;
  removeItem(key: string): Promise<void> | void;
}
