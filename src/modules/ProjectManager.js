const createProjectManager = () => {
    let projects = []
    let activeProjectId = null
    return {
        addProject(project) {
            projects.push(project)
        },
        getProjects() {
            return projects
        },
        removeProject(id) {
            projects = projects.filter(project => project.id !== id)
        },
        getProject(id) {
            return projects.find(project => project.id === id)
        },
        setActiveProject(id) {
            activeProjectId = id
        },
        getActiveProject() {
            return this.getProject(activeProjectId)
        }   
    }
}
export default createProjectManager