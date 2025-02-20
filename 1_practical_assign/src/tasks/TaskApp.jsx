import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskApp() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.trim()) {
            setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: task, done: false }]);
        }
    };

    const toggleTask = (id) =>
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );


    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <div className="container">
            <h1 className="title">Task List</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default TaskApp;
