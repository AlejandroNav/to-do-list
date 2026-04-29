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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Todo.js */ \"./src/modules/Todo.js\");\n/* harmony import */ var _modules_ProjectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ProjectManager.js */ \"./src/modules/ProjectManager.js\");\n/* harmony import */ var _modules_Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Project.js */ \"./src/modules/Project.js\");\n\n\n\n\n\nconst manager = (0,_modules_ProjectManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\nconst home = (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ name: 'Home' })\nconst work = (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ name: 'Work' })\n\nmanager.addProject(home)\nmanager.addProject(work)\n\nmanager.setActiveProject(home.id)\nconsole.log(manager.getActiveProject()) // should show Home\n\nmanager.setActiveProject(work.id)\nconsole.log(manager.getActiveProject()) // should show Work\n\n\n\nconst tabs = document.querySelectorAll('.nav-btn');\nconst content = document.getElementById('content');\n\nconst pages = {\n    home: () => {\n        content.innerHTML = `\n      <div class=\"hero\">\n        <h2>Hello World</h2>\n        <p>This is a neo-brutalist SPA template.</p>\n        <button class=\"btn\" id=\"alert-btn\">Click me</button>\n      </div>\n    `;\n        document.getElementById('alert-btn').addEventListener('click', () => {\n            alert('It works!');\n        });\n    },\n    about: () => {\n        content.innerHTML = `\n      <div class=\"hero\">\n        <h2>About</h2>\n        <p>Built with Webpack, HTML, CSS and vanilla JS.</p>\n      </div>\n    `;\n    },\n};\n\ntabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n        tabs.forEach(t => t.classList.remove('active'));\n        tab.classList.add('active');\n        content.style.animation = 'none';\n        content.offsetHeight;\n        content.style.animation = '';\n        pages[tab.dataset.tab]();\n    });\n});\n\npages.home();\n\n//# sourceURL=webpack://odin-project-template/./src/index.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17977f654e99a80f53de")
/******/ })();
/******/ 
/******/ }
);