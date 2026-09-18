// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise

// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "1999-01-01",
        assignedTo: "Username here",
        completed: false
    }
];

// Function to render all tasks to the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        if (task.completed) return;

        const taskItem = document.createElement('div');
        taskItem.className = 'card task-item';
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dueDate = new Date(task.dueDate + 'T00:00:00')
        const overdue = dueDate < today;

        if (overdue) taskItem.classList.add('overdue');
        
        taskItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <div class="task-date">Due: ${task.dueDate}</div>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <button class="btn btn-success btn-sm complete-task" data-id="${task.id}">
                        Mark Complete
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskItem);
    });
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    
    // TODO
});