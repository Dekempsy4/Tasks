import React from 'react';

import { Space, useQuery, observer, useIdentity, useClient } from '@dxos/react-client';

import { TaskProvider } from "./TaskProvider"
import { SpacesBar } from "./SpacesBar"

export const Root = () => {
    const identity = useIdentity({login:true});
    console.log('IDENTITY INFORMATION')
    console.log(identity)

    return (
        <div>
            <SpacesBar />
            <TaskProvider />
        </div>
    );
}