import { getDatabase, ref, onValue, set } from "firebase/database";
import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtNoGzf6OQpsL7J4SZfAUMQJdrO68BCh8",
    authDomain: "test-db-otus.firebaseapp.com",
    projectId: "test-db-otus",
    storageBucket: "test-db-otus.appspot.com",
    messagingSenderId: "301390592284",
    appId: "1:301390592284:web:a989d4400ba7d6133e62d9",
    databaseURL: "https://test-db-otus-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//Получение значения из firebase
onValue(ref(db, 'day1'), (dataSnapshot) => console.log(dataSnapshot.val()))
//Сохранение значения в firebase
set(ref(db, 'day1'), {test2: 2})
