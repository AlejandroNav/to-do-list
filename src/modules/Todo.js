const createTodo = ({
    title = 'Untitled',
    description = '',
    dueDate = null,
    priority = 'medium',
    notes = '',
    checklist = [],
}) => {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        
        checklist,
        completed: false,
        id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
        toggleComplete() {
            this.completed = !this.completed;
        },

        updateField(field, value) {
            this[field] = value;
        },
    }

}

export default createTodo;
