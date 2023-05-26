import React, { useState }  from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Tasks } from './Tasks';

import { PublicKey } from '@dxos/client';
import { Loading } from '@dxos/react-appkit';
import { Space, useQuery, observer, useIdentity, ClientProvider, useClient, useSpace } from '@dxos/react-client';




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
        e.preventDefault();
        const newTask = {
            type: 'task',
            taskText: document.getElementById('newTaskInput').value,
            completed: false,
        }
        element.tasks.push(newTask)
    }

    return(
        <Tasks 
            listTitle={element.title}
            tasks={element.tasks}
            onTitleChanged={onNameChange}
            onTaskCreate={onTaskCreate}

        />
    );
})