import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../main.css";

export type Task = {
    type: 'task'
    taskText: string;
};

export type TaskListProps<T extends Task = Task> = {
    tasks: T[];
};

export const TaskList = <T extends Task = Task>(props: TaskListProps<T>) => {
    const [count, setCount] = useState(0);
    const location = useLocation();

    React.useEffect(() => {
        console.log('location change!')
        console.log(location)
        setCount(count);
    }, [location.pathname]);



    const tasks = props.tasks;

    const List = () => {
        return tasks.map((task, id)=> {
            return(
                <li className = 'Item' key={id}>
                    <input className='taskCheckInput' type="checkbox"/>
                    <label className='taskLabel'>{task.taskText}</label>
                    <button className='delete'>X</button>
                </li>
            );
        });
    }
    
    return(
        <ul id="taskUL">
            {List()}
        </ul>
        
    )
}