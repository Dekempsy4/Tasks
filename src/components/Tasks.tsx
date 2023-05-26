import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';
import { Space, useQuery, observer, useIdentity, ClientProvider, useClient, useSpace } from '@dxos/react-client';
import { PublicKey } from '@dxos/client';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import "../main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList } from "./TaskList"

export type Task = {
    type: 'task';
    taskText: string;
    completed: boolean;
    onChange: () => any;
};

export type TaskListProps<T extends Task = Task> = {
    listTitle: string;
    tasks: T[];
    onTitleChanged?: (title: string) => any;
    onTaskCreate?: () => any;
    onTaskTitleChanged?: (task: T, title: string) => any;
    onTaskCompleteChanged?: (task: T, completed: boolean) => any;
    onTaskDeleted?: (task: T) => any;
};

export const Tasks = <T extends Task = Task>(props: TaskListProps<T>) => {
    const { tasks, listTitle, onTitleChanged, onTaskCreate, onTaskTitleChanged, onTaskCompleteChanged, onTaskDeleted } = props;
    // Component State
    const [name, setName] = useState(listTitle);
    const [tasksState, setTasks] = useState(tasks);

    // obtaining space from Route
    let { spaceKey } = useParams();
    const space = useSpace(spaceKey);



    return(
        <Container fluid id='mainDiv'>
            <Col xs={10} id='mainContent'>
                <Row id="newEventSection">
                    <input id='taskListName' value={listTitle} onChange={onTitleChanged}/>
                </Row>
                <Row id='taskListRow'><TaskList tasks={tasksState}/></Row>
                <Row  id='newButtonRow'>
                    <form onSubmit={()=>{console.log('youpiii')}}>
                        <Col xs={2}><button id='newItemButton'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1000px-Plus_symbol.svg.png?20081122110508'></img></button></Col>
                        <Col xs={10}><input id='newTaskInput' placeholder='New Task'/></Col>
                    </form>
                    
                </Row>
            </Col>
        </Container>
    );
};