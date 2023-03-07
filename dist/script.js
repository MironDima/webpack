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

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burgerFunc = function() {\r\n\tconsole.log('my burger');\r\n\tconsole.log('hi');\r\n}\r\nburgerFunc()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerFunc);\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderFunc = function (){\r\n\tconsole.log('my slider');\r\n\tconsole.log('ji');\r\n}\r\nsliderFunc()\r\n// таким образом я экспортирую данную фнукцию из файла\r\n//module.export = sliderFunc\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFunc);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n//Нужно создать src папку\r\n//Файл script.js будет точкой входа, \r\n// т.е он будет примнимать все наши модули \r\n\r\n\r\n// методов require()\r\n// это встроенная функция для включения внешних модулей\r\n// которые существуют в отдельных файлах.\r\n// Оператор require() читает файл JavaScript, выполняет его,\r\n//  а затем возвращает экспортированный объект\r\n\r\n// 1 require() можно вызвать из любого места\r\n// 2 require() может быть вызван условно\r\n\r\n// const slider = require('./modules/slider')\r\n// \t\t\t\t\t\t//путь к нашему модулю\r\n// const burger = require('./modules/burger')\t\r\n// slider()\r\n// burger()\r\n\r\n\r\n// и нам нужно сборщик\r\n// СОБЕРИТЕ СВОЙ ПЕРВЫЙ МОДУЛЬ с Browserify\r\n// 1 установка npm install -g browserify\r\n// 2  browserify script.js -o slider.js\r\n// script.js это точка входа \r\n// slider.js наш модуль \r\n// в терминале указвем папку dist куда будет создаваться файл\r\n// browserify src/script.js -o dist/slider.js\r\n// тем самым мы создаем файл  slider.js в котором будет\r\n//  находиться и содержимое точки входа и содержимое модуля\r\n// подключаем его к верстке\r\n\r\n\r\n\r\n\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n// Webpack\r\n// как установить?\r\n\r\n// документациця ->  гайды -> базаовая настройка\r\n// npm init -y\r\n// -y говорит что мы соглашаемся со всеми настройками,поэтому лучше писать без него\r\n// npm install webpack webpack-cli --save-dev\r\n\r\n// description описание проэкт\r\n// entry point: (index.js) script.js - точка входа наш файл\r\n// test command тестовые команды\r\n// git repository: гит репозиторий\r\n// keywords: ключевые слова\r\n// author: dima miron\r\n// license: (ISC) лицензия\r\n// создается фалй пакет json\r\n// {\r\n// \t\"name\": \"webpackname\",\r\n// \t\"version\": \"1.0.0\",\r\n// \t\"description\": \"\",\r\n// \t\"main\": \"script.js\",\r\n// \t\"scripts\": {\r\n// \t  \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\r\n// \t},\r\n// \t\"author\": \"dima miron\",\r\n// \t\"license\": \"ISC\"\r\n//   }\r\n// packege.json - это оснрвой файл описания нашего проэкта\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n// 2 шаг\r\n// npm install webpack webpack-cli --save-dev\r\n// создаст локально папку nodesmodule и \r\n// !!!!!!!!!!!!БАГ!!!!!!!!!!!!!!!!!!!!!!!!!\r\n// если выдает ошибку \r\n// npm i webpack@5.58.1\r\n// добавляю npm install --save-dev webpack-cli\r\n// удаляю вручную Dependencies\r\n// и добавлялю devDependencies  webpack\r\n// npm i webpack-cli@4.11.1\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n// package-lock.json отвечает за связь разных библиотек\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n// .gitignore\r\n// для того чтобы  package-lock.json и nodemodules\r\n// не попоали в гит хаб\r\n// не попадут в отслеживание гитом,\r\n// т е мы же открываем в другом компе\r\n\r\n// создаем гитигнор\r\n// в корне папки\r\n// /node_modules\r\n// package-lock.json\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n\r\n// СОБИРАЕМ НАШ ПРОЭКТ С ПОМОЩЬЮ WEBAPACK\r\n\r\n// ПРОПИСЫВАЕМ\r\n// npx webpack\r\n// который возьмет наш скрипт в src/script.js  в качестве\r\n//  точки входа и сгенерирует dist/main.jsв качестве вывода \r\n\r\n//scripts\r\n// scripts\": {\r\n//     \"build\": \"webpack\",\r\n//     \"watch\": \"webpack --watch\"  для постоянного отслеживания\r\n//   },\r\n\r\n// npm run watch\r\n\r\n//особенности es6\r\n\r\n\t\t\t\t\t\t//путь к нашему модулю\r\n\r\n\r\n\r\n// Баги\r\n// The 'mode' option has not been set, webpack \r\n// will fallback to 'production' for this value.\r\n// нужно добавить к скриптам mode\r\n\r\n// webpack dev serever\r\n// Используйте веб-пакет с сервером разработки, который обеспечивает перезагрузку в реальном времени. \r\n// Это следует использовать только для разработки\r\n \r\n//делаем настройку\r\n// чтобы у нас как и лайв сервер просиходили изменения\r\n\r\n// devServer: {\r\n// \thot: true,   //релоуд для перезагрузки\r\n// \tstatic: {   \r\n// \t\tdirectory: './dist',  \r\n// \t\twatch: true\r\n// \t}\r\n// }\r\n// }\r\n// \"start\": \"webpack serve --mode=development --open\"\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;