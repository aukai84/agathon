import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './index.css';
const farmForms = require('../../data/farmForms.json').forms;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:farmForms
        }
    }
    render() {
        
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
      </header>
        <div className="home-page-nav">
            <Row>
                <Col className="home-nav-item">
                    <h1>Farmer John</h1>
                    <p>Farm Forms, North Shore</p>
                </Col>
                <Col className="home-nav-item">
                    <h3>Statistics</h3>
                </Col>
                <Col className="home-nav-item">
                    <h3>Task  Manager</h3>
                </Col>
            </Row>
        </div>
        <div className="task-card-container">
            <Row>
                {this.state.tasks.map(task => (
                <Col xs="12" sm="12" md="6" lg="4" xl="4">
                    <div className="task-card">
                        <h4>{task.title}</h4>
                        <p>Last Log: 1/13/18</p>
                    </div>
                </Col>
                ))}    
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
