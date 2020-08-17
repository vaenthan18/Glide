import React, { Component } from 'react';
import './addAssignment.css';
import 'react-bootstrap';

class addAssignment extends Component {
    render() {
        return (
            <div className="col-sm" id="addAssignmentWrapper">
                <h1 className="display-4" id="mainTitle">Add an Assignment</h1>
                <p id = "subtitle" className="lead">Specify which class this assignment is for.</p>

                <input id = "assignmentField" className="form-control form-control-lg" type="text" placeholder="Class Name or Course Code"></input>

                <p id = "subtitle2" className="lead">Fill in the given fields below and select a class to create a new assignment.</p>
                <input id = "assignmentField" className="form-control form-control-lg" type="text" placeholder="Assignment Name"></input>
                <input id = "assignmentField" className="form-control form-control-lg" type="text" placeholder="Assignment Details"></input>
                <input id = "assignmentField" className="form-control form-control-lg" type="text" placeholder="Due Date"></input>
                <input id = "assignmentField" className="form-control form-control-lg" type="text" placeholder="Assignment Points"></input>
                <button type="button" className="btn btn-primary">Add Assignment</button>
            </div>
        );
    }
}

export default addAssignment;