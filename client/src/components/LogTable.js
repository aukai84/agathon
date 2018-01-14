import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
const userData = require('../data/userData.json');
const farmForms = require('../data/farmForms.json').forms;


class LogTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userData.user,
            data: userData.data[props.form_uid]
        };   
    }

    render() {
        const columns = farmForms.filter(item => (item.uid == this.props.form_uid))[0].fields.map(field => ({ Header: field.label, accessor: field.uid}));

        return (
            <div>
                <ReactTable data={this.state.data.entries} columns={columns} />     
            </div>       
        );

    }
}

export default LogTable;