import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, updateTask, deleteTask }) {
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

