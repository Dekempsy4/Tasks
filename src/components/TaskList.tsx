import React from 'react';
import "../main.css";

export type Task = {
    taskTitle: string;
};

export type TaskListProps<T extends Task = Task> = {
    tasks: T[];
};

export const TaskList = <T extends Task = Task>(props: TaskListProps<T>) => {

    const tasks = props.tasks;

    const List = () => {
        return tasks.map((task, id)=> {
            return(
                <li className = 'Item' key={id}>
                    <input className='taskCheckInput' type="checkbox"/>
                    <label className='taskLabel'>{task.taskTitle}</label>
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