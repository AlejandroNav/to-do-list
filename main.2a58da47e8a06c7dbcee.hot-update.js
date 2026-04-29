"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateodin_project_template"]("main",{

/***/ "./src/modules/Project.js"
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createProject = (name) => {\n\n    return {\n        name,\n        id: Date.now().toString() + Math.floor(Math.random() * 100).toString(),\n        tasks: [],\n        addTask(task) {\n            this.tasks.push(task)\n        },\n        removeTask(id) {\n            this.tasks = this.tasks.filter(task => task.id !== id)\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://odin-project-template/./src/modules/Project.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91f55caf151409867cac")
/******/ })();
/******/ 
/******/ }
);