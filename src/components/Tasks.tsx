import React from 'react';
import { useParams } from 'react-router-dom';
import { Space, useQuery, observer, useIdentity, ClientProvider, useClient, useSpace } from '@dxos/react-client';
import { Menubar, Separator, SpaceMenu, SpacesLink, Loading } from '@dxos/react-appkit';
import { PublicKey } from '@dxos/client';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import "../main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList } from "./TaskList"

export const Tasks = observer(() => {
    const identity = useIdentity();
    const client = useClient();

    // obtaining space from Route
    let { spaceKey } = useParams();
    const space = useSpace(spaceKey);
    console.log(space);

    return(
        <Container fluid id='mainDiv'>
            <Col xs={10} id='mainContent'>
                <Row id="newEventSection">
                    <input id='taskListName' placeholder="Title this list..."/>
                </Row>
                <Row id='taskListRow'><TaskList/></Row>
                <Row  id='newButtonRow'><button id='newItemButton'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1000px-Plus_symbol.svg.png?20081122110508'></img></button></Row>
            </Col>
        </Container>
    );
});