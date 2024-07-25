import { Task } from "./calendar/Task";
import { Calendar } from "./calendar/Calendar";
import { Storage } from "./calendar/Storage";

const task1 = new Task(
  1,
  new Date(Date.now()),
  ["tag1, tag2"],
  "OPEN",
  "1 задача",
);
const task2 = new Task(
  2,
  new Date(Date.now()),
  ["tag1, tag2"],
  "OPEN",
  "2 задача",
);
const task3 = new Task(
  3,
  new Date(Date.now()),
  ["tag1, tag2"],
  "OPEN",
  "2 задача",
);

const remoteStorage: Storage.RemoteStorage = new Storage.RemoteStorage(
  "remoteStorage/tasks/",
);
const calendar1 = new Calendar(document.querySelector("div"), remoteStorage);
calendar1.addTask(task1);
calendar1.addTask(task2);
calendar1.addTask(task3);
calendar1.getTaskById("1").then((result) => console.log(result));
calendar1.getTaskById("2").then((result) => console.log(result));
calendar1.getAllTasks().then((result) => console.log(result));

const localStorage: Storage.LocalStorage = new Storage.LocalStorage(
  "localStorage/tasks/",
);
const calendar2 = new Calendar(document.querySelector("div"), localStorage);

calendar2.addTask(task1);
calendar2.addTask(task2);

calendar2.getTaskById("1").then((result) => console.log(result));
calendar2.getTaskById("2").then((result) => console.log(result));

document.querySelector(".add").addEventListener("click", () => {
  calendar2.addTask(task3);
});
document.querySelector(".remove").addEventListener("click", () => {
  calendar2.removeTask(task3);
});
document.querySelector(".update").addEventListener("click", () => {
  const task3 = new Task(
    3,
    new Date(Date.now()),
    ["tag1, tag2"],
    "OPEN",
    "Обновлённая задача",
  );
  calendar2.updateTask(task3);
});
