import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import './index.css';
const farmForms = require('../../data/farmForms.json').forms;

class Tasks extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: farmForms
        }
    }

    render(){
        return(
            <div className="tasks-container">
                <Row>
                    {this.state.tasks.map(task => (
                    <Col xs="12" sm="12" md="6" lg="3" xl="3">
                        <Link to={`/tasks/${task.uid}`}>
                            <div className="task-card">
                                <h4>{task.title}</h4>
                                <p>Laste Log: 1/13/18</p>
                            </div>
                        </Link>
                    </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Tasks;
