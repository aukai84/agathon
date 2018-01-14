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
import WizardPage from '../WizardPage';
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
                <Col xs="5" className="home-nav-item">
                    <Link to="/">
                        <div className="profile-header">
                        <Row>
                                <Col xs="4">
                                    <img src="farmerJohn.png" className="avatar"/>
                                </Col>
                                <Col xs="8">
                                    <h1>Farmer John</h1>
                                    <p>Farm Forms, North Shore</p>
                                </Col>
                            </Row>
                        </div>
                    </Link>
                </Col>
                <Col xs="7" className="home-nav-item" right>
                    <Link to="/wizards" className="grey">
                        <h5 className="right grey">Form Walkthroughs</h5>
                    </Link>
                </Col>
            </Row>
        </div>
            <Switch>
                <Route exact path="/" component={Tasks}/>
                <Route path="/tasks/:id" component={FormPage}/>
                <Route path="/wizards" component={WizardPage}/>
            </Switch>
      </div>
    );
  }
}

export default App;
