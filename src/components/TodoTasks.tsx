import React from 'react';
import "../main.css";

export const TodoTasks = (() => {
    return(
        <ul>
            <li className = 'Item'>
                <input className='taskCheckInput' type="checkbox"/>
                <label className='taskLabel'>Blah Blah Blah</label>
            </li>
        </ul>
        
    )
})