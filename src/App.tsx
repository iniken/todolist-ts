import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";


export type TaskType={
    id: number,
    title: string,
    isDone: boolean
}

function App() {

    const tasks1: Array<TaskType> =[
        {id: 1, title: 'HTML', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'CSS', isDone: false},

    ]
    const tasks2: Array<TaskType> =[
        {id: 1, title: 'Beer', isDone: true},
        {id: 2, title: 'Fish', isDone: false},
        {id: 3, title: 'Cheeps', isDone: true},

    ]


    return (
        <div className="App">
            <TodoList title='What to learn' tasks={tasks1}/>
            <TodoList title='Songs' tasks={tasks2}/>
        </div>
    );
}

export default App;
