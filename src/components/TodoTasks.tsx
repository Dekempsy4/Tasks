import React from 'react';
import "../main.css";

export const TodoTasks = (() => {
    return(
        <ul id="taskUL">
            <li className = 'Item'>
                <input className='taskCheckInput' type="checkbox"/>
                <label className='taskLabel'>Blah Blah Blah</label>
                <button className='delete'>X</button>
            </li>
        </ul>
        
    )
})