const createProject = (name) => {

    return {
        name,
        id: Date.now().toString() + Math.floor(Math.random() * 100).toString(),
        tasks: [],
        addTask(task) {
            this.tasks.push(task)
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
        }
    }
}

export default createProject;