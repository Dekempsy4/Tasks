
import React from 'react';
import { generatePath, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useClient, useIdentity,} from '@dxos/react-client';



import { SpacesPage as BaseSpacesPage } from '@dxos/react-appkit';

export const SpacesBar = () => {

    return (
        <div id='sideBar'>
            {/* <h1 id="sideBarTitle">Select Space</h1> */}
            <BaseSpacesPage
                spacePath="/spaces/:space" // how to navigate to a specific space
            />
        </div>
    );
};