import { RemoteStorage } from "./calendar/RemoteStorage";
import { LocalStorage } from "./calendar/LocalStorage";

const remoteStorage: RemoteStorage = new RemoteStorage();
remoteStorage.getItem("day1").then((result) => console.log(result));
remoteStorage
  .setItem("day2", { test3: 3 })
  .then(() => console.log("Данные успешно сохранились в firebase"));

const localStorage: LocalStorage = new LocalStorage();
localStorage.setItem("day2", { test3: 3 });
localStorage.getItem("day2").then((result) => console.log(result));
