import firebase from "firebase/compat";

export interface IStorage {
    getItem(key: string): any | null;
    setItem(key: string, value: any): void;
}

// async function readData(key) {
//     return localstorage.getItem(key);
// }

export class LocalStorage implements IStorage {
    getItem(key: string): any | null {
        return JSON.parse(window.localStorage.getItem(key));
    }

    setItem(key: string, value: any): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtNoGzf6OQpsL7J4SZfAUMQJdrO68BCh8",
    authDomain: "test-db-otus.firebaseapp.com",
    projectId: "test-db-otus",
    storageBucket: "test-db-otus.appspot.com",
    messagingSenderId: "301390592284",
    appId: "1:301390592284:web:a989d4400ba7d6133e62d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig)

export class RemoteStorage implements IStorage {
    getItem(key: string): any | null {

        return JSON.parse(window.localStorage.getItem(key));
    }

    setItem(key: string, value: any): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getApp() {
        return initializeApp(firebaseConfig);
    }

}