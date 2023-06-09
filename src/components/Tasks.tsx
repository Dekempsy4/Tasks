import React, { useState }  from 'react';
import { Loading } from '@dxos/react-appkit';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';



import "../main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList } from "./TaskList";

export type Task = {
    type: 'task';
    taskText: string;
    completed: boolean;
    onChange: () => any;
};

export type TaskListProps<T extends Task = Task> = {
    listTitle: string;
    tasks: [];
    inviteCode: string;
    onTitleChanged?: (e: any) => void;
    onTaskCreate?: (e: any) => void;
    onTaskCompleteChanged?: (task: any) => void;
    onTaskDeleted?: (task: any) => void;
    invitePeer?: () => void;
};

export const Tasks = <T extends Task = Task>(props: TaskListProps<T>) => {
    const { tasks, listTitle, inviteCode, onTitleChanged, onTaskCreate, onTaskCompleteChanged, onTaskDeleted, invitePeer } = props;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    if (!tasks) {
        return <Loading label='Loading' />;
    }

    const inviteButtonClick = () => {
        invitePeer()
        setOpen(o => !o);
    }



    return(
        <Container fluid id='mainDiv'>
            <Col xs={10} id='mainContent'>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className='popupDiv'>
                        <div className='popupText'>Invite code:</div>
                        {inviteCode}
                    </div>
                </Popup>
                <Row id="newEventSection">
                    <Col xs={10} id='nameCol'><input id='taskListName' value={listTitle} onChange={onTitleChanged}/></Col>
                    <Col xs={2} id='invCol'><button id='createInvite' onClick={inviteButtonClick}>invite peer</button></Col>
                </Row>
                <Row id='taskListRow'><TaskList tasks={tasks} onTaskDeleted={onTaskDeleted} onTaskCompleteChanged={onTaskCompleteChanged}/></Row>
                <form onSubmit={onTaskCreate}>
                    <Row  id='newButtonRow'>
                        <Col xs={2}><button id='newItemButton'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1000px-Plus_symbol.svg.png?20081122110508'></img></button></Col>
                        <Col xs={10}><input id='newTaskInput' placeholder='New Task'/></Col>
                    </Row>
                </form> 
            </Col>
        </Container>
    );
};