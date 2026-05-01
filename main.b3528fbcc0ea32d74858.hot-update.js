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

/***/ "./src/modules/render.js"
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderApp: () => (/* binding */ renderApp),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\nconst renderProjects = (projects, activeProjectId) => {\n    const projectList = document.querySelector('#project-list')\n\n    projectList.innerHTML = ''\n\n    projects.forEach(project => {\n        const projectItem = document.createElement('li')\n        const projectButton = document.createElement('button')\n\n        projectButton.textContent = project.name\n        projectButton.dataset.projectId = project.id\n\n        if (project.id === activeProjectId) {\n            projectButton.classList.add('active')\n        }\n\n        projectItem.appendChild(projectButton)\n        projectList.appendChild(projectItem)\n    })\n}\n\nconst renderTasks = (tasks) => {\n  const taskList = document.querySelector('#task-list')\n  taskList.innerHTML = ''\n  tasks.forEach(task => {\n    const taskItem = document.createElement('li')\n    taskItem.dataset.taskId = task.id\n    const taskButton = document.createElement('button')\n    taskButton.textContent = task.title\n    if (task.completed) {\n      taskButton.classList.add('completed')\n    }\n    taskItem.appendChild(taskButton)\n    taskList.appendChild(taskItem)\n  })\n}\n\nconst renderApp = (manager) => {\n    const activeProject = manager.getActiveProject()\n    const title = document.querySelector('#active-project-title')\n\n    if (activeProject) {\n        title.textContent = activeProject.name\n        renderTasks(activeProject.tasks)\n    } else {\n        title.textContent = 'No project selected'\n        renderTasks([])\n    }\n\n    renderProjects(\n        manager.getProjects(),\n        activeProject ? activeProject.id : null\n    )\n}\n\n\n\n//# sourceURL=webpack://odin-project-template/./src/modules/render.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("82312b1d89d278a306a6")
/******/ })();
/******/ 
/******/ }
);