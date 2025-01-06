import React from 'react';
import Ticket from './ticket';

const Board = () => {
    const [tasks, setTasks] = React.useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="board">
            <h2>Kanban Board</h2>
            <div className="task-columns">
                <div className="column">
                    <h3>To Do</h3>
                    {tasks.filter(task => task.status === 'todo').map(task => (
                        <Ticket key={task.id} task={task} removeTask={removeTask} />
                    ))}
                </div>
                <div className="column">
                    <h3>In Progress</h3>
                    {tasks.filter(task => task.status === 'in-progress').map(task => (
                        <Ticket key={task.id} task={task} removeTask={removeTask} />
                    ))}
                </div>
                <div className="column">
                    <h3>Done</h3>
                    {tasks.filter(task => task.status === 'done').map(task => (
                        <Ticket key={task.id} task={task} removeTask={removeTask} />
                    ))}
                </div>
            </div>
            <button onClick={() => addTask({ id: Date.now(), description: 'New Task', status: 'todo' })}>
                Add Task
            </button>
        </div>
    );
};

export default Board;