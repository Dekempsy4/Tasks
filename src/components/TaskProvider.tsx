import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Tasks } from './Tasks';
import { Loading } from '@dxos/react-appkit';
import { useQuery, observer, useSpace } from '@dxos/react-client';
import { InvitationEncoder } from '@dxos/client';




export const TaskProvider = observer(() => {
    let [code, setCode] = useState('empty')

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

    const invitePeer = () => {
        const invitation = space.createInvitation();
        setCode(InvitationEncoder.encode(invitation.get()));
        console.log(code);
    }

    return(
        <Tasks 
            listTitle={element.listTitle}
            tasks={element.tasks}
            inviteCode={code}
            onTitleChanged={onNameChange}
            onTaskCreate={onTaskCreate}
            onTaskDeleted={onTaskDeleted}
            onTaskCompleteChanged={onTaskCompleteChanged}
            invitePeer={invitePeer}

        />
    );
})