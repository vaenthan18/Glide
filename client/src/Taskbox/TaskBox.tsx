import React from 'react';

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
        <div className='square' style={{backgroundColor: props.classColour}}> </div>
      </span>

      <span className='info text'>
        <div>
          <h2> {props.name} </h2>
        </div>
        <div className="due-date">
         Due: {props.dueDate}
        </div>
      </span>


    </div>

  );
}

