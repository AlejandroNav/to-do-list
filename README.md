# Tasky — Todo List App

A modular todo list application that lets users organize tasks into projects and manage their daily workflow.
Built as part of [The Odin Project](https://www.theodinproject.com).
![App Screenshot]([https://raw.githubusercontent.com/yourusername/your-repo-name/main/screenshots/app.png](https://github.com/AlejandroNav/to-do-list/blob/main/screenshots/app.png?raw=true))
**Live Demo:** [View App](https://alejandronav.github.io/to-do-list/)

---

## Overview

Tasky is a dynamic todo list application focused on clean architecture and separation of concerns.
Users can create projects, add tasks with details like due dates, priorities, notes and descriptions,
and manage them through an interactive interface.

Data is persisted using localStorage so everything is saved between sessions — including full
rehydration of objects with their methods intact.

---

## Features

- Create, and delete projects
- Add, edit, delete, and complete tasks
- Expand tasks inline to see full details
- Edit tasks via a modal form with all fields
- Priority indicators (high / medium / low) with color coding
- Completed task styling with strikethrough
- Data persistence via localStorage with full object rehydration
- Default projects and tasks on first load
- Animated UI with hover effects

---

## Built With

- HTML5
- CSS (neo-brutalist design)
- JavaScript (ES6 modules)
- Webpack
- Google Fonts Space Grotesk

---

## What I Practiced

- Factory functions and modular JavaScript architecture
- Separation of concerns: logic, DOM, and storage in separate modules
- Event delegation for dynamic DOM elements
- localStorage with JSON serialization and object rehydration
- Webpack module bundling and build pipeline
- CSS animations and transitions
- Dynamic DOM manipulation without frameworks

---

## Project Structure
src/
├── index.js          — app entry point, boots from localStorage
├── style.css         — all styles
├── template.html     — base HTML template
└── modules/
├── Todo.js           — task factory function
├── Project.js        — project factory function
├── ProjectManager.js — manages all projects and active state
├── Storage.js        — localStorage save/load with rehydration
├── render.js         — DOM rendering functions
└── events.js         — all user interaction and event handlers
