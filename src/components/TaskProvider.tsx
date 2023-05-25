import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';

import { Tasks } from './Tasks';

import { PublicKey } from '@dxos/client';
import { Loading } from '@dxos/react-appkit';
import { Space, useQuery, observer, useIdentity, ClientProvider, useClient, useSpace } from '@dxos/react-client';


export const TaskProvider = observer(() => {
    const identity = useIdentity();
    const client = useClient();

    // obtaining space from Route
    let { spaceKey } = useParams();
    const space = useSpace(spaceKey);
    const tasks = useQuery(space, { type: 'taskList' });
    console.log(tasks);
    // if (!taskList) {
    //     return <Loading label='loading' />;
    // }

    return(<Tasks />);
})