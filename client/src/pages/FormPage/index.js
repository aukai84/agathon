import React, {Component} from 'react';
import {Row, Col, Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
import LogTable from '../../components/LogTable';
import './index.css';
import 'react-table/react-table.css';

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

    addNewLog(){

    }

    render(){
        console.log(this.state.task)
        return (
            <div className="form-page-container">
                <div>{this.state.task.title}</div>
                <Button className="log-btn" onClick={this.toggle} color="success" block>Create New Log</Button>
                
                <LogTable form_uid={this.props.match.params.id}/>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader className="log-btn" toggle={this.toggle}>Create New {this.state.task.title}</ModalHeader>
                    <ModalBody>
                    <div className="input-form-container">
                        <Form>
                            {this.state.task.fields.map(item => (
                            <FormGroup row>
                                        <Label for={item.label} sm={4} size="lg">{item.label}</Label>
                                        <Col sm={8}>
                                            <Input id={item.label} type={item.type} bsSize="lg"/>
                                        </Col>
                            </FormGroup>
                            ))}

                            <Button type="submit" onClick={this.addNewLog()} color="success" block>Submit</Button>
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
