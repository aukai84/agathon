import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './index.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import Tasks from '../Tasks';
import FormPage from '../FormPage';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.state.tasks)
    return (
      <div className="App container">
        <div className="home-page-nav">
            <Row>
                <Col className="home-nav-item">
                    <Link to="/">
                        <div className="profile-header">
                            <h1>Farmer John</h1>
                            <p>Farm Forms, North Shore</p>
                        </div>
                    </Link>
                </Col>
                <Col className="home-nav-item">
                    <h3>Statistics</h3>
                </Col>
                <Col className="home-nav-item">
                    <h3>Task  Manager</h3>
                </Col>
            </Row>
        </div>
            <Switch>
                <Route exact path="/" component={Tasks}/>
                <Route path="/tasks/:id" component={FormPage}/>
            </Switch>
      </div>
    );
  }
}

export default App;
