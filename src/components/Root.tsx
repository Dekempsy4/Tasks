import React from 'react';

import { Space, useQuery, observer, useIdentity, useClient } from '@dxos/react-client';

import { Tasks } from "./Tasks"
import { SpacesBar } from "./SpacesBar"

export const Root = () => {
    const identity = useIdentity({ login: true });
    const client = useClient();

    return (
        <div>
            <SpacesBar />
            <Tasks />
        </div>
    );
}