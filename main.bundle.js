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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CashTransaction: () => (/* binding */ CashTransaction)\n/* harmony export */ });\nlet CashTransaction = /*#__PURE__*/function (CashTransaction) {\n  CashTransaction[CashTransaction[\"OUTCOME\"] = 0] = \"OUTCOME\";\n  CashTransaction[CashTransaction[\"INCOME\"] = 1] = \"INCOME\";\n  return CashTransaction;\n}({});\n\n//# sourceURL=webpack://lesson22/./src/CashTransaction.ts?");

/***/ }),

/***/ "./src/Category.ts":
/*!*************************!*\
  !*** ./src/Category.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Category: () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\n  constructor(id, code, name) {\n    this.id = id;\n    this.codes = code;\n    this.name = name;\n  }\n}\n\n//# sourceURL=webpack://lesson22/./src/Category.ts?");

/***/ }),

/***/ "./src/Operation.ts":
/*!**************************!*\
  !*** ./src/Operation.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Operation: () => (/* binding */ Operation)\n/* harmony export */ });\nclass Operation {\n  constructor(id, code, date, sum, type) {\n    this.id = id;\n    this.code = code;\n    this.date = date;\n    this.sum = sum;\n    this.type = type;\n  }\n}\n\n//# sourceURL=webpack://lesson22/./src/Operation.ts?");

/***/ }),

/***/ "./src/StorageData.ts":
/*!****************************!*\
  !*** ./src/StorageData.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StorageData: () => (/* binding */ StorageData)\n/* harmony export */ });\n/* harmony import */ var _Operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Operation */ \"./src/Operation.ts\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ \"./src/Category.ts\");\n/* harmony import */ var _CashTransaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CashTransaction */ \"./src/CashTransaction.ts\");\n\n\n\nclass StorageData {\n  constructor() {\n    const operations = new Array();\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(1, 111, new Date(\"2024-07-07T10:01:00\"), 101, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(2, 111, new Date(\"2024-07-08T10:02:02\"), 102, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(3, 111, new Date(\"2024-07-09T10:03:00\"), 103, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(4, 777, new Date(\"2024-06-04T10:04:00\"), 1000, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.INCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(5, 777, new Date(\"2024-07-03T10:05:00\"), 2000, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.INCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(6, 333, new Date(\"2024-07-02T10:06:00\"), 105, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(7, 333, new Date(\"2024-06-01T10:07:00\"), 106, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(8, 444, new Date(\"2024-02-02T10:08:00\"), 2300, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    operations.push(new _Operation__WEBPACK_IMPORTED_MODULE_0__.Operation(9, 444, new Date(\"2024-03-01T10:09:00\"), 2300, _CashTransaction__WEBPACK_IMPORTED_MODULE_2__.CashTransaction.OUTCOME));\n    this.operations = operations;\n    const categories = new Array();\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(1, new Set([111]), \"Расходы на еду\"));\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(2, new Set([555]), \"Топливо\"));\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(3, new Set([777]), \"Зарплата\"));\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(6, new Set([222]), \"Вода\"));\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(7, new Set([333]), \"Свет\"));\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(8, new Set([444]), \"Отопление\"));\n    categories.push(new _Category__WEBPACK_IMPORTED_MODULE_1__.Category(9, new Set([222, 333, 444]), \"ЖКХ\"));\n    this.categories = categories;\n  }\n  getCategoriesAll() {\n    return this.categories;\n  }\n  getOperationsAll() {\n    return this.operations;\n  }\n  getCategoryById(id) {\n    return undefined;\n  }\n  getOperationById(id) {\n    return undefined;\n  }\n  getOperationFromDate(startDate, endDate) {\n    return undefined;\n  }\n}\n\n//# sourceURL=webpack://lesson22/./src/StorageData.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCategoriesContainsCode: () => (/* binding */ getCategoriesContainsCode),\n/* harmony export */   getConsumptionByDatesFromRange: () => (/* binding */ getConsumptionByDatesFromRange),\n/* harmony export */   getFullMapCategoryForPeriod: () => (/* binding */ getFullMapCategoryForPeriod),\n/* harmony export */   getOperationFromPeriod: () => (/* binding */ getOperationFromPeriod),\n/* harmony export */   getOutcomeCashCategoriesCodeFromPeriod: () => (/* binding */ getOutcomeCashCategoriesCodeFromPeriod),\n/* harmony export */   getSumMapFromCategory: () => (/* binding */ getSumMapFromCategory),\n/* harmony export */   getSumOperations: () => (/* binding */ getSumOperations),\n/* harmony export */   sortCategoryForPeriod: () => (/* binding */ sortCategoryForPeriod)\n/* harmony export */ });\n/* harmony import */ var _StorageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageData */ \"./src/StorageData.ts\");\n/* harmony import */ var _CashTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CashTransaction */ \"./src/CashTransaction.ts\");\n\n\nconst storageData = new _StorageData__WEBPACK_IMPORTED_MODULE_0__.StorageData();\nconst allCategories = storageData.getCategoriesAll();\nconst allOperations = storageData.getOperationsAll();\n\n//расход по категориям из диапозона дат\nfunction getSumMapFromCategory(startDate, endDate) {\n  let map = getFullMapCategoryForPeriod(startDate, endDate);\n  const resultMap = new Map();\n  map.forEach((value, key) => {\n    let sum = Array.from(value).map(o => o.sum).reduce((accumulator, currentValue) => accumulator + currentValue);\n    resultMap.set(key, sum);\n  });\n  return resultMap;\n}\n\n//расход по датам из диапазона\nfunction getConsumptionByDatesFromRange(startDate, endDate) {\n  let listOperations = getOperationFromPeriod(startDate, endDate);\n\n  //Получаем только расходные\n  const resultMap = new Map();\n  let dateList = new Set(listOperations.filter(operation => operation.type === _CashTransaction__WEBPACK_IMPORTED_MODULE_1__.CashTransaction.OUTCOME).map(o => o.date));\n  dateList.forEach(date => {\n    let sum = listOperations.filter(operation => operation.date === date).map(operation => operation.sum).reduce((accumulator, currentValue) => accumulator + currentValue);\n    resultMap.set(date, sum);\n  });\n  return resultMap;\n}\n\n// Полная мапа, связка категорий и списка операций\nfunction getFullMapCategoryForPeriod(startDate, endDate) {\n  let resultMap = new Map();\n  let listOperation = getOperationFromPeriod(startDate, endDate);\n  allCategories.forEach(category => {\n    let list = new Set();\n    category.codes.forEach(code => listOperation.filter(operation => code === operation.code).forEach(o => list.add(o)));\n    resultMap.set(category, list);\n  });\n  return resultMap;\n}\n\n//Возвращаем все категории которые содержат определённый код операции\nfunction getCategoriesContainsCode(code) {\n  return allCategories.filter(category => category.codes.has(code));\n}\n\n//Получаем список кодов расходных операций за определённый период\nfunction getOutcomeCashCategoriesCodeFromPeriod(categoryName, startDate, endDate) {\n  return new Set(allOperations.filter(operation => operation.type === _CashTransaction__WEBPACK_IMPORTED_MODULE_1__.CashTransaction.OUTCOME).filter(operation => operation.date > startDate).filter(operation => operation.date < endDate).map(operation => operation.code));\n}\nfunction getOperationFromPeriod(startDate, endDate) {\n  return Array.from(allOperations.filter(operation => operation.date > startDate).filter(operation => operation.date < endDate));\n}\n\n//Сумма по операциям\nfunction getSumOperations(listOperations) {\n  return listOperations.map(operation => operation.sum).reduce((accumulator, currentValue) => accumulator + currentValue);\n}\n\n//сортировка категорий по сумме за указанный диапозон дат\nfunction sortCategoryForPeriod(startDate, endDate) {\n  const map = getFullMapCategoryForPeriod(startDate, endDate);\n  const resultMap = new Map();\n  map.forEach((value, key) => resultMap.set(key, getSumOperations(value)));\n  return new Map([...resultMap.entries()].sort((a, b) => b[1] - a[1]));\n}\n\n//# sourceURL=webpack://lesson22/./src/index.ts?");

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