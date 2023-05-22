import { observer } from '@dxos/react-client';
import React from 'react';


import { SpacesPage } from '@dxos/react-appkit';

export const SpacesBar = observer(() => {
    return (
        <div id='sideBar'>
            <h1 id="sideBarTitle">Select Space</h1>
            {/* <SpacesPage
                spacePath="/spaces/:space" // how to navigate to a specific space
                onSpaceCreate={() => {
                    // handle the event that the user clicks "create space"
                    // this is where you can initialize the space with new objects
                }}
            /> */}
        </div>
    );
});