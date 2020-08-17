import React from 'react';
import "./KanbanColumn.scss";
import { taskComponentProps } from '../Taskbox/TaskBox';
import TaskBox from "../Taskbox/TaskBox"


export interface columnComponentProps {
  tasks: taskComponentProps[];
  groupName: string;
}

export default function KanbanColumn(props: columnComponentProps) {
  return (
  <div className="col">
    <h1 className='Header'>{props.groupName} </h1>
      <ul className='column'>
        {props.tasks.map((task) => (
          <li className='box' key={task.name}><TaskBox name={task.name} className={task.className} classColour={task.classColour} dueDate={task.dueDate}/></li>
        ))}
      </ul>
  </div>    
  )
}