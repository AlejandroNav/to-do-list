import createProject from './Project.js'
import createTodo from './Todo.js'

const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

const loadProjects = () => {
    const projectsData = localStorage.getItem('projects')
    if (!projectsData) return []

    return JSON.parse(projectsData).map(projectData => {
        const project = createProject({ name: projectData.name, id: projectData.id })
        projectData.tasks.forEach(taskData => {
            project.addTask(createTodo(taskData))
        })
        return project
    })
}

export { saveProjects, loadProjects }