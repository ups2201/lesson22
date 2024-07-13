import { RemoteStorage } from "./calendar/RemoteStorage";
import { LocalStorage } from "./calendar/LocalStorage";
import {Task} from "./calendar/Task";
import {Calendar} from "./calendar/Calendar";

const task1 = new Task(1, new Date(Date.now()), new Set<string>(["tag1, tag2"]), "OPEN", "Первая задача");

const remoteStorage: RemoteStorage = new RemoteStorage("remoteStorage/tasks/");
const calendar1 = new Calendar(document.querySelector('body'), remoteStorage);
calendar1.addTask(task1);
calendar1.getTask("1").then((result) => console.log(result));

const localStorage: LocalStorage = new LocalStorage("localStorage/tasks/");
const calendar2 = new Calendar(document.querySelector('body'), localStorage);

calendar2.addTask(task1);
calendar2.getTask("1").then((result) => console.log(result));
