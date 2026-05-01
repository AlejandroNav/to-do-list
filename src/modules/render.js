const renderProjects = (projects, activeProjectId) => {
    const projectList = document.querySelector('#project-list')

    projectList.innerHTML = ''

    projects.forEach(project => {
        const projectItem = document.createElement('li')
        const projectButton = document.createElement('button')

        projectButton.textContent = project.name
        projectButton.dataset.projectId = project.id

        if (project.id === activeProjectId) {
            projectButton.classList.add('active')
        }

        projectItem.appendChild(projectButton)
        projectList.appendChild(projectItem)
    })
}

const renderTasks = (tasks) => {
    const taskList = document.querySelector('#task-list')
    taskList.innerHTML = ''
    if (tasks.length === 0) {
        const empty = document.createElement('p')
        empty.textContent = 'No tasks yet — add one!'
        empty.style.opacity = '0.6'
        taskList.appendChild(empty)
        return
    }
    tasks.forEach(task => {
        const taskItem = document.createElement('li')
        taskItem.dataset.priority = task.priority
        taskItem.dataset.taskId = task.id
        const taskButton = document.createElement('button')
        taskButton.textContent = task.title
        if (task.completed) {
            taskButton.classList.add('completed')
        }
        taskItem.appendChild(taskButton)
        taskList.appendChild(taskItem)
    })
}

const renderApp = (manager) => {
    const activeProject = manager.getActiveProject()
    const title = document.querySelector('#active-project-title')

    if (activeProject) {
        title.textContent = activeProject.name
        renderTasks(activeProject.tasks)
    } else {
        title.textContent = 'No project selected'
        renderTasks([])
    }

    renderProjects(
        manager.getProjects(),
        activeProject ? activeProject.id : null
    )
}

export { renderProjects, renderTasks, renderApp }