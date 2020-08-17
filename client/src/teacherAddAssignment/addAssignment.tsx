import React, { Component } from 'react';
import './addAssignment.css';

class addAssignment extends Component {
    render() {
        return (
            <div className="col-sm" id="addAssignmentWrapper">
                <h1 className="display-4">Add an Assignment</h1>
                <p className="lead">Fill in the given fields below and select a class to create a new assignment.</p>
                <div className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Personal asset loans</a>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">            
                        <li><a href="#">asds</a></li>
                        <li className="divider"></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default addAssignment;