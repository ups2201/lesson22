/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CashTransaction.ts":
/*!********************************!*\
  !*** ./src/CashTransaction.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CashTransaction: () => (/* binding */ CashTransaction)\n/* harmony export */ });\nlet CashTransaction = /*#__PURE__*/function (CashTransaction) {\n  CashTransaction[\"OUTCOME\"] = \"OUTCOME\";\n  CashTransaction[\"INCOME\"] = \"INCOME\";\n  return CashTransaction;\n}({});\n\n//# sourceURL=webpack://lesson22/./src/CashTransaction.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCategoriesContainsCode: () => (/* binding */ getCategoriesContainsCode),\n/* harmony export */   getConsumptionByDatesFromRange: () => (/* binding */ getConsumptionByDatesFromRange),\n/* harmony export */   getFullMapCategoryForPeriod: () => (/* binding */ getFullMapCategoryForPeriod),\n/* harmony export */   getOperationFromPeriod: () => (/* binding */ getOperationFromPeriod),\n/* harmony export */   getOutcomeCashCategoriesCodeFromPeriod: () => (/* binding */ getOutcomeCashCategoriesCodeFromPeriod),\n/* harmony export */   getSumMapFromCategory: () => (/* binding */ getSumMapFromCategory),\n/* harmony export */   getSumOperations: () => (/* binding */ getSumOperations),\n/* harmony export */   sortCategoryForPeriod: () => (/* binding */ sortCategoryForPeriod)\n/* harmony export */ });\n/* harmony import */ var _CashTransaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CashTransaction */ \"./src/CashTransaction.ts\");\n\n\n//расход по категориям из диапозона дат\nfunction getSumMapFromCategory(map, startDate, endDate) {\n  const resultMap = new Map();\n  map.forEach((operationsInCategory, key) => {\n    const sum = Array.from(operationsInCategory).filter(operation => operation.type === _CashTransaction__WEBPACK_IMPORTED_MODULE_0__.CashTransaction.OUTCOME).filter(operation => operation.date > startDate).filter(operation => operation.date < endDate).map(o => o.sum).reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n    resultMap.set(key.name, sum);\n  });\n  return resultMap;\n}\n\n//расход по датам из диапазона\nfunction getConsumptionByDatesFromRange(listOperations, startDate, endDate) {\n  //Получаем только расходные\n  const resultMap = new Map();\n  const dateList = [];\n  dateList.push(startDate);\n  const dateTemp = new Date(startDate);\n  while (dateTemp < endDate) {\n    dateTemp.setDate(dateTemp.getDate() + 1);\n    dateList.push(new Date(dateTemp));\n  }\n  dateList.forEach(date => {\n    const startDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);\n    const endDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 0);\n    const sum = listOperations.filter(operation => operation.date >= startDay && operation.date <= endDay).map(operation => operation.sum).reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n    if (date >= startDate && date <= endDate) {\n      resultMap.set(date, sum);\n    } else {\n      resultMap.set(date, 0);\n    }\n  });\n  return resultMap;\n}\n\n// Полная мапа, связка категорий и списка операций\nfunction getFullMapCategoryForPeriod(listOperations, allCategories, startDate, endDate) {\n  const resultMap = new Map();\n  allCategories.forEach(category => {\n    const list = new Set();\n    category.codes.forEach(code => listOperations.filter(operation => code === operation.code).forEach(o => list.add(o)));\n    resultMap.set(category, list);\n  });\n  return resultMap;\n}\n\n//Возвращаем все категории которые содержат определённый код операции\nfunction getCategoriesContainsCode(allCategories, code) {\n  return allCategories.filter(category => category.codes.has(code));\n}\n\n//Получаем список кодов расходных операций за определённый период\nfunction getOutcomeCashCategoriesCodeFromPeriod(listOperations, categoryName, startDate, endDate) {\n  return new Set(listOperations.filter(operation => operation.type === _CashTransaction__WEBPACK_IMPORTED_MODULE_0__.CashTransaction.OUTCOME).filter(operation => operation.date > startDate).filter(operation => operation.date < endDate).map(operation => operation.code));\n}\nfunction getOperationFromPeriod(listOperations, startDate, endDate) {\n  return Array.from(listOperations.filter(operation => operation.date > startDate).filter(operation => operation.date < endDate));\n}\n\n//Сумма по операциям\nfunction getSumOperations(listOperations) {\n  console.log(listOperations);\n  return Array.from(listOperations).map(operation => operation.sum).reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n}\n\n//сортировка категорий по сумме за указанный диапозон дат\nfunction sortCategoryForPeriod(map, startDate, endDate) {\n  const resultMap = new Map();\n  map.forEach((value, key) => resultMap.set(key.name, getSumOperations(value)));\n  return new Map([...resultMap.entries()].sort((a, b) => b[1] - a[1]));\n}\n\n//# sourceURL=webpack://lesson22/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;