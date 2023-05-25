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
    const [element] = useQuery(space, {type: 'taskList'});
    if (!element) {
        return <Loading label='loading' />;
    }
    const [list] = element.tasks;
    console.log(list);


    return(<Tasks />);
})