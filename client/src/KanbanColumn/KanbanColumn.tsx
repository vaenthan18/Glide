import React from 'react';
import "./KanbanColumn.scss";
import { taskComponentProps } from '../Taskbox/TaskBox';
import TaskBox from "../Taskbox/TaskBox"
import AddButtonComponent from '../AddButtonComponent/AddButtonComponent';


export interface columnComponentProps {
    tasks: taskComponentProps[];
    groupName: string;
}

export default function KanbanColumn(props: columnComponentProps) {
    return (
        <div className="col">
            <div className="row">
                <h1 className='Header col-md-10'>{props.groupName} </h1>
                <AddButtonComponent columnName={props.groupName} />
            </div>
            <ul className='column'>
                {props.tasks.map((task) => (
                    <li className='box' key={task.name}><TaskBox name={task.name} className={task.className} classColour={task.classColour} dueDate={task.dueDate} /></li>
                ))}
            </ul>
        </div>
    )
}