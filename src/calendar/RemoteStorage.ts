// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  Database,
  get,
  getDatabase,
  ref,
  set,
  onValue,
} from "firebase/database";

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
  v: string;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
  }

  async getItem(key: string): Promise<any> {
    return (await get(ref(this.db, key))).val();
  }

  async setItem(key: string, value: any): Promise<void> {
    //Сохранение значения в firebase
    return set(ref(this.db, key), value);
  }
}
