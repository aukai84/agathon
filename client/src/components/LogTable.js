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
            data: userData.data[props.form_uid] || 0
        };   
    }

    render() {
        const columns = farmForms.filter(item => (item.uid == this.props.form_uid))[0].fields.map(field => ({ Header: field.label, accessor: field.uid}));

        if(this.state.data != 0){
            return (
                <div>
                    <ReactTable data={this.state.data.entries}
                                columns={columns} 
                                defaultSorted={[{id: "1", desc: true}]} 
                                filterable
                                defaultFilterMethod={(filter, row) =>
                                    String(row[filter.id]) === filter.value}
                                className="-striped -highlight"/>     
                </div>       
            );
        } else {
            return(
                <div>
                <h1 className="center margin-top-30" >You have no entries!</h1>
                <h3 className="center">Make your first entry to get started.</h3>
                </div>
            );
        }

    }
}

export default LogTable;