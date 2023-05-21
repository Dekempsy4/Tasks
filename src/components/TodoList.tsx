import React from 'react';
import { Space, useQuery, observer } from '@dxos/react-client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "../main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { TodoTasks } from "./TodoTasks"

export const TodoList = observer(() => {
    return(
            <Container fluid id='mainDiv'>
                <Col id='sideBar' xs={2}>Side Bar</Col>
                <Col id='mainContent' xs={12}>
                    <h1 id='appTitle'>TODOS</h1>
                    <div id="itemList">
                        <Row id="newEventSection">
                            <Col xs={2}><button id="completeAllButton">B</button></Col>
                            <Col xs={10}><input id='newTodoInput' placeholder="What needs to be done?"/></Col> 
                        </Row>
                        <Row><TodoTasks /></Row>
                    </div>  
                </Col>
            </Container>
            
    );
});