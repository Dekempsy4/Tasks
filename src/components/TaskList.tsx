import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../main.css";

export type Task = {
    type: 'task',
    id: number,
    taskText: string,
    completed: boolean,
};

export type TaskListProps<T extends Task = Task> = {
    tasks: T[];
    onTaskDeleted?: (task: T) => any;
    onTaskCompleteChanged?: (task: T) => any;
};

export const TaskList = <T extends Task = Task>(props: TaskListProps<T>) => {
    const { onTaskDeleted, onTaskCompleteChanged } = props;
    const tasks = props.tasks;
    
    

    const List = () => {

        return tasks.map((task, id)=> {
            return(
                <li className='Item' key={id}>
                    <input className='taskCheckInput' type="checkbox" onChange={(e)=> {onTaskCompleteChanged(task)}} checked={task.completed} />
                    <label className='taskLabel'>{task.taskText}</label>
                    <button className='delete' onClick={(e) => {onTaskDeleted(task)}}>X</button>
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