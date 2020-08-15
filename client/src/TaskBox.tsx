import React from 'react';
import { ReactComponent as Icon } from './boxIcon.svg';
import "./TaskBox.scss";
export interface taskComponentProps {

  name: string, 
  className: string,
  dueDate: string,
  classColour: string 
}
export default function TaskBox(props: taskComponentProps){
  return (
    <div className='taskBox' style={{ borderColor: props.classColour }}>
    
      <span className='icon info'>
        <Icon fill={props.classColour}></Icon>
      </span>

      <span className='info text'>
        <div>
          {props.name}
        </div>
        <div>
          {props.dueDate}
        </div>
      </span>


    </div>

  );
}

