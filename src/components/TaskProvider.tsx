import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';

import { Tasks } from './Tasks';
import { Loading } from '@dxos/react-appkit';
import { useQuery, observer, useIdentity, useClient, useSpace } from '@dxos/react-client';




export const TaskProvider = observer(() => {

    const [newTaskText, setNewText] = useState('New Task');

    const identity = useIdentity();
    const client = useClient();

    // obtaining space from Route
    let { spaceKey } = useParams();
    const space = useSpace(spaceKey);


    const [element] = useQuery(space, {type: 'taskList'});

    if (!element) {
        return <Loading label='loading' />;
    }

    const onNameChange = (e) => {
        element.listTitle = e.target.value;
    }

    const onTaskCreate = (e) => {
        const inputText = (document.getElementById('newTaskInput') as HTMLInputElement).value;
        e.preventDefault();
        const newTask = {
            type: 'task',
            id: Math.random().toString(16).slice(2),
            taskText: inputText,
            completed: false,
        }
        element.tasks.push(newTask);
        (document.getElementById('newTaskInput') as HTMLInputElement).value = '';
    }

    const onTaskDeleted = (task) => {
        let index = element.tasks.map( el => el.id ).indexOf(task.id)
        element.tasks.splice(index, 1);
    }

    const onTaskCompleteChanged = (task) => {
        const index = element.tasks.map( el => el.id ).indexOf(task.id)
        let newTask = task;
        newTask.completed = !task.completed;
        element.tasks[index] = newTask;
    }

    return(
        <Tasks 
            listTitle={element.listTitle}
            tasks={element.tasks}
            onTitleChanged={onNameChange}
            onTaskCreate={onTaskCreate}
            onTaskDeleted={onTaskDeleted}
            onTaskCompleteChanged={onTaskCompleteChanged}

        />
    );
})