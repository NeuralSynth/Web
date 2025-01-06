// app.js

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-btn');
    const removeButton = document.querySelector('.remove-btn');
    const taskArea = document.querySelector('.task-area');
    const ticketContainer = document.querySelector('.ticket-cont');

    let taskIdCounter = 1;

    addButton.addEventListener('click', () => {
        const taskDescription = taskArea.textContent.trim();
        if (taskDescription) {
            createTaskTicket(taskIdCounter++, taskDescription);
            taskArea.textContent = '';
        }
    });

    removeButton.addEventListener('click', () => {
        const lastTicket = ticketContainer.lastElementChild;
        if (lastTicket) {
            ticketContainer.removeChild(lastTicket);
        }
    });

    function createTaskTicket(id, description) {
        const ticket = document.createElement('div');
        ticket.classList.add('ticket-cont');
        
        const ticketColor = document.createElement('div');
        ticketColor.classList.add('ticket-color');
        
        const ticketId = document.createElement('div');
        ticketId.classList.add('ticket-id');
        ticketId.textContent = id;

        const taskArea = document.createElement('div');
        taskArea.classList.add('task-area');
        taskArea.textContent = description;
        taskArea.setAttribute('contenteditable', 'false');

        const ticketLock = document.createElement('div');
        ticketLock.classList.add('ticket-lock');
        ticketLock.innerHTML = '<i class="fa-solid fa-lock"></i>';

        ticket.appendChild(ticketColor);
        ticket.appendChild(ticketId);
        ticket.appendChild(taskArea);
        ticket.appendChild(ticketLock);

        ticketContainer.appendChild(ticket);
    }
});