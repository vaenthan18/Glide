import React, { Component } from 'react';
import './Board.css';

import KanbanColumn from '../KanbanColumn/KanbanColumn';

var ToDoProps = {
    tasks: [{
        name: "Yeet", 
        className: "Yeet",
        dueDate: "yeet",
        classColour: "black" 
      }
    ],
    groupName: "To Do"
}

var InProgressProps = {
    tasks: [],
    groupName: "In Progress"
}

var CompletedProps = {
    tasks: [],
    groupName: "Completed"
}

class Board extends Component {
    render() {
        return (
            <div className="col">
                <div className="rounded-lg col bg-light content-section">
                    <div className="row">
                        {KanbanColumn(ToDoProps)}
                        {KanbanColumn(InProgressProps)}
                        {KanbanColumn(CompletedProps)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;