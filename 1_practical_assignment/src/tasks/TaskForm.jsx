import { useState } from "react";

function TaskForm({ addTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                className="task-input"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit" className="add-button">Add Task</button>
        </form>
    );
}

export default TaskForm;
