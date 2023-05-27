import React, { useState } from 'react';

import { Space, useQuery, observer, useIdentity, useClient } from '@dxos/react-client';

import { TaskProvider } from "./TaskProvider"
import { SpacesBar } from "./SpacesBar"
import { useLocation } from 'react-router-dom';

export const Root = () => {

    const identity = useIdentity({login:true});
    

    return (
        <div>
            <SpacesBar />
            <TaskProvider />
        </div>
    );
}