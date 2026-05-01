const createTodo = ({
    title = 'Untitled',
    description = '',
    dueDate = null,
    priority = 'medium',
    notes = '',
    checklist = [],
    completed = false,
    id = Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
}) => {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        completed,
        id,

        toggleComplete() {
            this.completed = !this.completed
        },

        updateField(field, value) {
            const allowedFields = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist']
            if (!allowedFields.includes(field)) return
            this[field] = value
        },
    }
}
export default createTodo