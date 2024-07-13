// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  Database,
  get,
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
import { IStorage } from "./IStorage";

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
  namespace: string;

  constructor(namespace: string) {
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
    this.namespace = namespace;
  }

  async getItem(key: string): Promise<any> {
    return (await get(ref(this.db, this.namespace + key))).val();
  }

  async setItem(key: string, value: any): Promise<void> {
    return set(ref(this.db, this.namespace + key), value);
  }

  async removeItem(key: string): Promise<void> {
    return remove(ref(this.db, this.namespace + key));
  }

  async updateItem(key: string, value: any): Promise<void> {
    return update(ref(this.db, this.namespace + key), value);
  }
}
