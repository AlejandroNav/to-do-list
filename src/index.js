import './style.css'
import createProjectManager from './modules/ProjectManager.js'
import createProject from './modules/Project.js'
import createTodo from './modules/Todo.js'
import { loadProjects, saveProjects } from './modules/Storage.js'
import { renderApp } from './modules/render.js'
import { setupEvents } from './modules/events.js'

const manager = createProjectManager()

const savedProjects = loadProjects()
if (savedProjects.length === 0) {
  const home = createProject({ name: 'Home' })
  home.addTask(createTodo({ title: 'Buy groceries', priority: 'high', dueDate: '2024-06-01' }))
  home.addTask(createTodo({ title: 'Clean the kitchen', priority: 'medium', dueDate: '2024-06-02' }))
  home.addTask(createTodo({ title: 'Fix the sink', priority: 'high', dueDate: '2024-06-03' }))
  home.addTask(createTodo({ title: 'Do laundry', priority: 'low', dueDate: '2024-06-04' }))
  home.addTask(createTodo({ title: 'Mow the lawn', priority: 'low', dueDate: '2024-06-05' }))
  home.addTask(createTodo({ title: 'Pay electricity bill', priority: 'high', dueDate: '2024-06-06' }))

  const work = createProject({ name: 'Work' })
  work.addTask(createTodo({ title: 'Send weekly report', priority: 'high', dueDate: '2024-06-01' }))
  work.addTask(createTodo({ title: 'Team standup meeting', priority: 'medium', dueDate: '2024-06-02' }))

  const school = createProject({ name: 'School' })
  school.addTask(createTodo({ title: 'Math homework', priority: 'high', dueDate: '2024-06-03' }))
  school.addTask(createTodo({ title: 'Read chapter 5', priority: 'medium', dueDate: '2024-06-04' }))
  school.addTask(createTodo({ title: 'Study for exam', priority: 'high', dueDate: '2024-06-05' }))
  school.addTask(createTodo({ title: 'Submit essay', priority: 'medium', dueDate: '2024-06-06' }))

  manager.addProject(home)
  manager.addProject(work)
  manager.addProject(school)
  manager.setActiveProject(home.id)
  saveProjects(manager.getProjects())
} else {
  savedProjects.forEach(project => manager.addProject(project))
  manager.setActiveProject(savedProjects[0].id)
}

renderApp(manager)
setupEvents(manager)