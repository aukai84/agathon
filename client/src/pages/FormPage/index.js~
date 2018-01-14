import React, {Component} from 'react';
import {Row, Col, Container,  Form, Button, Modal} from 'reactstrap';
import {Link} from 'react-router-dom';

const farmForms = require('../../data/farmForms.json').forms;

class FormPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: farmForms.filter(item => (item.uid == props.match.params.id))
        }
    }

    render(){
        console.log(this.state.task)
        return (
            <div className="form-page-container">

            </div>
        )
    }
}

export default FormPage;
