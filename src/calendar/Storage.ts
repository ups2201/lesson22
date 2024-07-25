import {
  Database,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { initializeApp } from "firebase/app";

export interface IStorage {
  prefix: string;
  getItem(key: string): Promise<any>;
  setItem(key: string, value: any): Promise<void> | void;
  updateItem(key: string, value: any): Promise<void> | void;
  removeItem(key: string): Promise<void> | void;
}

export namespace Storage {
  export class LocalStorage implements IStorage {
    prefix: string;

    constructor(prefix: string) {
      this.prefix = prefix;
    }

    async getItem(key: string): Promise<any> {
      return JSON.parse(window.localStorage.getItem(this.prefix + key));
    }

    setItem(key: string, value: any): void {
      window.localStorage.setItem(this.prefix + key, JSON.stringify(value));
    }

    removeItem(key: string): void {
      window.localStorage.removeItem(this.prefix + key);
    }

    updateItem(key: string, value: any): void {
      this.removeItem(key);
      window.localStorage.setItem(this.prefix + key, JSON.stringify(value));
    }
  }

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBtNoGzf6OQpsL7J4SZfAUMQJdrO68BCh8",
    authDomain: "test-db-otus.firebaseapp.com",
    projectId: "test-db-otus",
    storageBucket: "test-db-otus.appspot.com",
    messagingSenderId: "301390592284",
    appId: "1:301390592284:web:a989d4400ba7d6133e62d9",
    databaseURL:
      "https://test-db-otus-default-rtdb.europe-west1.firebasedatabase.app",
  };

  export class RemoteStorage implements IStorage {
    db: Database;
    prefix: string;

    constructor(namespace: string) {
      const app = initializeApp(firebaseConfig);
      this.db = getDatabase(app);
      this.prefix = namespace;
    }

    async getItem(key: string): Promise<any> {
      return (await get(ref(this.db, this.prefix + key))).val();
    }

    async setItem(key: string, value: any): Promise<void> {
      return set(ref(this.db, this.prefix + key), value);
    }

    async removeItem(key: string): Promise<void> {
      return remove(ref(this.db, this.prefix + key));
    }

    async updateItem(key: string, value: any): Promise<void> {
      return update(ref(this.db, this.prefix + key), value);
    }
  }
}
