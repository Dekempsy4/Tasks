
import React, { useCallback } from 'react';
import { generatePath, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

import { Space, TypedObject, Expando } from '@dxos/client';
import { useClient, useIdentity, useSpace} from '@dxos/react-client';
import { SpacesPage as BaseSpacesPage } from '@dxos/react-appkit';
import { TaskProvider } from './TaskProvider';




export const SpacesBar = () => {
    
    const identity = useIdentity();
    const client = useClient();

    const createNewTaskList = useCallback(async (space: Space) => {
        const list = new Expando({type: 'taskList', title:'Title this List', tasks:[]});
        console.log(list);
        await space.db.add(list);
    }, []);

    return (
        <div id='sideBar'>
            {/* <h1 id="sideBarTitle">Select Space</h1> */}
            <BaseSpacesPage
                spacePath="/spaces/:space" // how to navigate to a specific space
                onSpaceCreate={createNewTaskList}
            />
        </div>
    );
};