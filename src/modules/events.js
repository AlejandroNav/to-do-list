import createProjectManager from './ProjectManager.js'
import { renderApp } from './render.js'
import createProject from './Project.js'
import createTodo from './Todo.js'
import { saveProjects } from '../modules/Storage.js'

const setupProjectEvents = (manager) => {
    const projectList = document.querySelector('#project-list')

    projectList.addEventListener('click', (event) => {
        const projectButton = event.target.closest('button')

        if (!projectButton) return

        const projectId = projectButton.dataset.projectId

        manager.setActiveProject(projectId)
        renderApp(manager)
    })
}


const setupAddProjectEvent = (manager) => {
    const addBtn = document.querySelector('#add-project-btn')
    addBtn.addEventListener('click', () => {
        const name = prompt('Project name:')
        if (!name) return
        const project = createProject({ name })
        manager.addProject(project)
        manager.setActiveProject(project.id)
        renderApp(manager)
        saveProjects(manager.getProjects())
    })
}

const setupAddTaskEvent = (manager) => {
    const addBtn = document.querySelector('#add-task-btn')

    addBtn.addEventListener('click', () => {
        const activeProject = manager.getActiveProject()
        if (!activeProject) return
        const title = prompt('Task title:')
        if (!title) return
        const task = createTodo({ title })
        activeProject.addTask(task)
        renderApp(manager)
    })
}

const setupTaskEvents = (manager) => {
    const taskList = document.querySelector('#task-list')
    taskList.addEventListener('click', (event) => {
        const activeProject = manager.getActiveProject()
        if (!activeProject) return
        const taskItem = event.target.closest('li')
        if (!taskItem) return
        const taskId = taskItem.dataset.taskId
        const task = activeProject.tasks.find(t => t.id === taskId)
        if (!task) return

        if (event.target.classList.contains('delete-btn')) {
            activeProject.removeTask(taskId)
            saveProjects(manager.getProjects())
            renderApp(manager)
            return
        }

        if (event.target.classList.contains('complete-btn')) {
            task.toggleComplete()
            saveProjects(manager.getProjects())
            renderApp(manager)
            return
        }

        if (event.target.classList.contains('edit-btn')) {
            // modal coming soon
            return
        }

        // expand/collapse
        const existing = taskItem.querySelector('.task-details')
        if (existing) {
            existing.remove()
        } else {
            const details = document.createElement('div')
            details.classList.add('task-details')
            details.innerHTML = `
        <p><strong>Description:</strong> ${task.description || 'None'}</p>
        <p><strong>Due date:</strong> ${task.dueDate || 'None'}</p>
        <p><strong>Priority:</strong> ${task.priority}</p>
        <p><strong>Notes:</strong> ${task.notes || 'None'}</p>
        <button class="complete-btn" data-task-id="${task.id}">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="edit-btn" data-task-id="${task.id}">Edit</button>
        <button class="delete-btn" data-task-id="${task.id}">Delete</button>
      `
            taskItem.appendChild(details)
        }
    })
}
const setupEvents = (manager) => {
    setupProjectEvents(manager)
    setupAddProjectEvent(manager)
    setupAddTaskEvent(manager)
    setupTaskEvents(manager)
}

export { setupEvents }