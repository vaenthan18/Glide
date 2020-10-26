import React, { Component } from 'react';
import './Board.css';

import KanbanColumn from '../KanbanColumn/KanbanColumn';

class Board extends Component {
    render() {
        return (
            <div className="col">
                <div className="rounded-lg col bg-light content-section">
                    <div className="row">
                        <KanbanColumn groupName="To Do"/>
                        <KanbanColumn groupName="In Progress"/>
                        <KanbanColumn groupName="Completed"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;