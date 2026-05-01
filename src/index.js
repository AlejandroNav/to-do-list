import './style.css'
import createProjectManager from './modules/ProjectManager.js'
import createProject from './modules/Project.js'
import { loadProjects, saveProjects } from './modules/Storage.js'
import { renderApp } from './modules/render.js'
import { setupEvents } from './modules/events.js'

const manager = createProjectManager()

const savedProjects = loadProjects()
if (savedProjects.length === 0) {
  const inbox = createProject({ name: 'Inbox' })
  manager.addProject(inbox)
  manager.setActiveProject(inbox.id)
  saveProjects(manager.getProjects())
} else {
  savedProjects.forEach(project => manager.addProject(project))
  manager.setActiveProject(savedProjects[0].id)
}

renderApp(manager)
setupEvents(manager)