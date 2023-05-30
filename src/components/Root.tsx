import React, { useEffect } from 'react';

import { TaskProvider } from "./TaskProvider"
import { SpacesBar } from "./SpacesBar"
import { useLocation } from 'react-router-dom';

import { useIdentity, useClient } from '@dxos/react-client';

export const Root = () => {

    const identity = useIdentity({login:true});

    const client = useClient();
    const DX_VAULT = client.config.get('runtime.app.env.DX_VAULT');

    useEffect(() => {
        if (DX_VAULT === 'false' && !identity) {
          void client.halo.createIdentity();
        }
      }, []);
    
    if (DX_VAULT === 'false' && !identity) {
    return null;
    }
    

    return (
        <div>
            <SpacesBar />
            <TaskProvider />
        </div>
    );
}