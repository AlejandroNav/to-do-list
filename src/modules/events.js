import { renderApp } from './render.js'
import createProject from './Project.js'
import createTodo from './Todo.js'
import { saveProjects } from './Storage.js'

let currentTaskId = null

const openModal = (task = null) => {
    currentTaskId = task ? task.id : null
    document.querySelector('#modal-title').value = task ? task.title : ''
    document.querySelector('#modal-description').value = task ? task.description : ''
    document.querySelector('#modal-due-date').value = task ? task.dueDate || '' : ''
    document.querySelector('#modal-priority').value = task ? task.priority : 'medium'
    document.querySelector('#modal-notes').value = task ? task.notes : ''
    document.querySelector('#modal h2').textContent = task ? 'Edit Task' : 'New Task'
    document.querySelector('#modal').classList.remove('hidden')
}

const closeModal = () => {
    document.querySelector('#modal').classList.add('hidden')
    currentTaskId = null
}

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

const openProjectModal = () => {
    document.querySelector('#project-modal-name').value = ''
    document.querySelector('#project-modal').classList.remove('hidden')
}

const closeProjectModal = () => {
    document.querySelector('#project-modal').classList.add('hidden')
}

const setupAddProjectEvent = (manager) => {
    const addBtn = document.querySelector('#add-project-btn')
    addBtn.addEventListener('click', () => openProjectModal())

    document.querySelector('#project-modal-cancel').addEventListener('click', closeProjectModal)

    document.querySelector('#project-modal').addEventListener('click', (event) => {
        if (event.target === document.querySelector('#project-modal')) closeProjectModal()
    })

    document.querySelector('#project-modal-save').addEventListener('click', () => {
        const name = document.querySelector('#project-modal-name').value
        if (!name) return
        const project = createProject({ name })
        manager.addProject(project)
        manager.setActiveProject(project.id)
        saveProjects(manager.getProjects())
        renderApp(manager)
        closeProjectModal()
    })
}

const setupAddTaskEvent = (manager) => {
    const addBtn = document.querySelector('#add-task-btn')
    addBtn.addEventListener('click', () => {
        const activeProject = manager.getActiveProject()
        if (!activeProject) return
        openModal()
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
            openModal(task)
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
  <div class="btn-group">
    <button class="complete-btn" data-task-id="${task.id}">
      ${task.completed ? 'Undo' : 'Complete'}
    </button>
    <button class="edit-btn" data-task-id="${task.id}">Edit</button>
    <button class="delete-btn" data-task-id="${task.id}">Delete</button>
  </div>
`
            taskItem.appendChild(details)
        }
    })
}

const setupModalEvents = (manager) => {
    document.querySelector('#modal-cancel').addEventListener('click', closeModal)
    document.querySelector('#modal').addEventListener('click', (event) => {
        if (event.target === document.querySelector('#modal')) closeModal()
    })

    document.querySelector('#modal-save').addEventListener('click', () => {
        const activeProject = manager.getActiveProject()
        if (!activeProject) return

        if (currentTaskId) {
            // edit mode
            const task = activeProject.tasks.find(t => t.id === currentTaskId)
            if (!task) return
            task.updateField('title', document.querySelector('#modal-title').value)
            task.updateField('description', document.querySelector('#modal-description').value)
            task.updateField('dueDate', document.querySelector('#modal-due-date').value)
            task.updateField('priority', document.querySelector('#modal-priority').value)
            task.updateField('notes', document.querySelector('#modal-notes').value)
        } else {
            // create mode
            const task = createTodo({
                title: document.querySelector('#modal-title').value || 'Untitled',
                description: document.querySelector('#modal-description').value,
                dueDate: document.querySelector('#modal-due-date').value,
                priority: document.querySelector('#modal-priority').value,
                notes: document.querySelector('#modal-notes').value,
            })
            activeProject.addTask(task)
        }

        saveProjects(manager.getProjects())
        renderApp(manager)
        closeModal()
    })
}

const setupEvents = (manager) => {
    setupProjectEvents(manager)
    setupAddProjectEvent(manager)
    setupAddTaskEvent(manager)
    setupTaskEvents(manager)
    setupModalEvents(manager)
}

export { setupEvents }