import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>React To-Do Application</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
