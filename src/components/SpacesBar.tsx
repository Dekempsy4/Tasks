
import React, { useCallback } from 'react';
import { Space, Expando } from '@dxos/client';
import { SpacesPage as BaseSpacesPage } from '@dxos/react-appkit';




export const SpacesBar = () => {

    const createNewTaskList = useCallback(async (space: Space) => {
        const list = new Expando({type: 'taskList', listTitle:'Title this List', tasks:[]});
        await space.db.add(list);
    }, []);

    return (
        <div id='sideBar'>
            <BaseSpacesPage
                spacePath="/spaces/:space" // how to navigate to a specific space
                onSpaceCreate={createNewTaskList}
            />
        </div>
    );
};