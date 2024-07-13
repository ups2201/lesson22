import { RemoteStorage } from "./calendar/MyStorage";

const remoteStorage: RemoteStorage = new RemoteStorage();
remoteStorage.getItem("day1").then((result) => console.log(result));
