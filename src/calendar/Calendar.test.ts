import { describe, expect, test } from "@jest/globals";
import { Task } from "./Task";
import { Calendar } from "./Calendar";
import "jest-localstorage-mock";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { Storage } from "./Storage";
// require('jest-localstorage-mock');

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Проверка календаря с localStorage", () => {
  let tasks: Task[];
  let calendar: Calendar;

  beforeEach(() => {
    tasks = new Array<Task>();
    tasks.push(
      new Task(1, new Date(Date.now()), ["tag1, tag2"], "OPEN", "1 задача"),
    );
    tasks.push(
      new Task(2, new Date(Date.now()), ["tag1, tag2"], "OPEN", "2 задача"),
    );
    tasks.push(
      new Task(3, new Date(Date.now()), ["tag1, tag2"], "OPEN", "3 задача"),
    );

    const localStorage: Storage.LocalStorage = new Storage.LocalStorage(
      "localStorage/tasks/",
    );
    calendar = new Calendar(document.querySelector("div"), localStorage);

    jest.restoreAllMocks();
  });

  test("Проверка сохранения в localStorage", () => {
    calendar.addTask(tasks[0]);
    expect(JSON.stringify(tasks[0])).toEqual(
      localStorageMock.getItem("localStorage/tasks/1"),
    );
  });

  test("Проверка удаления в localStorage", () => {
    calendar.addTask(tasks[0]);
    calendar.removeTask(tasks[0]);
    expect(undefined).toEqual(localStorageMock.getItem("localStorage/tasks/1"));
  });

  test("Проверка обновления в localStorage", () => {
    calendar.addTask(tasks[0]);
    const updateTask = new Task(
      1,
      new Date(Date.now()),
      ["tag1, tag2"],
      "OPEN",
      "Обновлённая",
    );
    calendar.updateTask(updateTask);
    expect(JSON.stringify(updateTask)).toEqual(
      localStorageMock.getItem("localStorage/tasks/1"),
    );
  });
});
