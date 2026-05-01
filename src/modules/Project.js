const createProject = ({
    name = 'New Project',
    id = Date.now().toString() + Math.floor(Math.random() * 100).toString()
}) => {
    return {
        name,
        id,
        tasks: [],

        addTask(task) {
            this.tasks.push(task)
        },

        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId)
        }
    }
}

export default createProject