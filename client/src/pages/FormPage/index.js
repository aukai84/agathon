import React, {Component} from 'react';
import {Row, Col, Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
import './index.css';

const farmForms = require('../../data/farmForms.json').forms;
const userData = require('../../data/userData.json');
class FormPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: farmForms.filter(item => (item.uid == props.match.params.id))[0],
            user: userData.user,
            data: userData.data[props.match.params.id],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    render(){
        console.log(this.state.task)
        return (
            <div className="form-page-container">
                <div>{this.state.task.title}</div>
                <Button onClick={this.toggle} color="success" block>Create New Log</Button>
                <div className="previous-logs-conntainer">
                    {this.state.data.entries.map(entry => (
                    <div>
                        <p>{entry.date}</p>
                        <p>{entry["water-source"]}</p>
                    </div>
                    ))}
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Create New Log</ModalHeader>
                    <ModalBody>
                    <div className="input-form-container">
                        <Form>
                            {this.state.task.fields.map(item => (
                            <FormGroup>
                                <Label for={item.label} className="input-label">{item.label}</Label>
                                <Input id={item.label} type={item.type}/>
                            </FormGroup>
                            ))}
                        </Form>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default FormPage;
