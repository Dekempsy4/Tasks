import React, { useState }  from 'react';
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

    // Component State
    const [name, setName] = useState('Title this list...');
    const [newTaskText, setNewTaskText] = useState('New Task');
    const [tasks, setTasks] = useState([]);

    const identity = useIdentity();
    const client = useClient();

    // obtaining space from Route
    let { spaceKey } = useParams();
    const space = useSpace(spaceKey);

    const nameChange = (e) => {
        setName(e.target.value);
        console.log(tasks);
 
    }
    
    const handleChange = (e) => {
        setNewTaskText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(tasks.concat({
            taskTitle: newTaskText,
        }))
        console.log(tasks)
    }



    return(
        <Container fluid id='mainDiv'>
            <Col xs={10} id='mainContent'>
                <Row id="newEventSection">
                    <input id='taskListName' value={name} onChange={nameChange}/>
                </Row>
                <Row id='taskListRow'><TaskList tasks={tasks}/></Row>
                <Row  id='newButtonRow'>
                    <form onSubmit={handleSubmit}>
                        <Col xs={2}><button id='newItemButton'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1000px-Plus_symbol.svg.png?20081122110508'></img></button></Col>
                        <Col xs={10}><input id='newTaskInput' value={newTaskText} onChange={handleChange}/></Col>
                    </form>
                    
                </Row>
            </Col>
        </Container>
    );
});