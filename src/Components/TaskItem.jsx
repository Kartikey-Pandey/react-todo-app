import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/tasksSlice';
import './TaskItem.css';

const TaskItem = ({ task, index }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask(index));
    };

    const handleEditTask = () => {
        const newTask = prompt("Edit task:", task);
        if (newTask) {
            dispatch(editTask({ index, newTask }));
        }
    };

    return (
        <div className="task-item">
            <span>{task}</span>
            <div className="task-item-buttons">
                <button onClick={handleEditTask} className="task-edit-button">
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={handleDeleteTask} className="task-delete-button">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
