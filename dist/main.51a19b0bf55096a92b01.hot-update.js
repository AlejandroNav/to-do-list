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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectManager.js */ \"./src/modules/ProjectManager.js\");\n/* harmony import */ var _modules_Project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Project.js */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Todo.js */ \"./src/modules/Todo.js\");\n/* harmony import */ var _modules_Storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Storage.js */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/events.js */ \"./src/modules/events.js\");\n\n\n\n\n\n\n\n\nconst manager = (0,_modules_ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\nconst savedProjects = (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_4__.loadProjects)()\nif (savedProjects.length === 0) {\n  const home = (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ name: 'Home' })\n  home.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Buy groceries', priority: 'high', dueDate: '2024-06-01' }))\n  home.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Clean the kitchen', priority: 'medium', dueDate: '2024-06-02' }))\n  home.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Fix the sink', priority: 'high', dueDate: '2024-06-03' }))\n  home.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Do laundry', priority: 'low', dueDate: '2024-06-04' }))\n  home.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Mow the lawn', priority: 'low', dueDate: '2024-06-05' }))\n  home.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Pay electricity bill', priority: 'high', dueDate: '2024-06-06' }))\n\n  const work = (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ name: 'Work' })\n  work.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Send weekly report', priority: 'high', dueDate: '2024-06-01' }))\n  work.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Team standup meeting', priority: 'medium', dueDate: '2024-06-02' }))\n\n  const school = (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ name: 'School' })\n  school.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Math homework', priority: 'high', dueDate: '2024-06-03' }))\n  school.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Read chapter 5', priority: 'medium', dueDate: '2024-06-04' }))\n  school.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Study for exam', priority: 'high', dueDate: '2024-06-05' }))\n  school.addTask((0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ title: 'Submit essay', priority: 'medium', dueDate: '2024-06-06' }))\n\n  manager.addProject(home)\n  manager.addProject(work)\n  manager.addProject(school)\n  manager.setActiveProject(home.id)\n  ;(0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(manager.getProjects())\n} else {\n  savedProjects.forEach(project => manager.addProject(project))\n  manager.setActiveProject(savedProjects[0].id)\n}\n\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_5__.renderApp)(manager)\n;(0,_modules_events_js__WEBPACK_IMPORTED_MODULE_6__.setupEvents)(manager)\n\n//# sourceURL=webpack://odin-project-template/./src/index.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93c1ca34ec776661505d")
/******/ })();
/******/ 
/******/ }
);