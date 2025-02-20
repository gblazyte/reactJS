import { useState } from "react";


function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <li className={`task-item ${task.done ? "task-done" : ""}`}>
            <span style={{ color: task.done ? "green" : "black" }}>
                {task.text}
            </span>
            <div>
                <button className="done-button" onClick={() => toggleTask(task.id)}>
                    {task.done ? "Undo" : "Done"}
                </button>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}



export default TaskItem;
