import React from 'react';
import "../main.css";

export type Task = {
    taskTitle: string;
};

export type TaskListProps<T extends Task = Task> = {
    taskTitle: string;
    tasks: [];
};

export const TaskList = <T extends Task = Task>(props: TaskListProps<T>) => {

    const tasks = props.tasks;

    const List = () => {
        return tasks.map((element)=> {
            return(
                <li className = 'Item'>
                    <input className='taskCheckInput' type="checkbox"/>
                    <label className='taskLabel'>{element.taskTitle}</label>
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