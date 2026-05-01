import createProjectManager from './modules/ProjectManager.js'
import createProject from './modules/Project.js'
import createTodo from './modules/Todo.js'
import { renderApp } from './modules/render.js'
import { setupEvents } from './modules/events.js'
import './style.css'

const manager = createProjectManager()

// projects
const home = createProject({ name: 'Home' })
const work = createProject({ name: 'Work' })
const school = createProject({ name: 'School' })
manager.addProject(home)
manager.addProject(work)
manager.addProject(school)
manager.setActiveProject(work.id)

// home tasks
home.addTask(createTodo({ title: 'Buy chicken', priority: 'high', dueDate: '2024-06-01' }))
home.addTask(createTodo({ title: 'Clean house', priority: 'low', dueDate: '2024-06-03' }))
home.addTask(createTodo({ title: 'Pay bills', priority: 'medium', dueDate: '2024-06-05' }))

// work tasks
work.addTask(createTodo({ title: 'Send report', priority: 'high', dueDate: '2024-06-02' }))
work.addTask(createTodo({ title: 'Team meeting', priority: 'medium' }))

// school tasks
school.addTask(createTodo({ title: 'Math homework', priority: 'high' }))

renderApp(manager)
setupEvents(manager)