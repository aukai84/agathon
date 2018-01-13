import React, { Component } from 'react';
import logo from './logo.svg';
import {Row, Col, Container} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

            </Row>
        </div>
      </div>
    );
  }
}

export default App;
