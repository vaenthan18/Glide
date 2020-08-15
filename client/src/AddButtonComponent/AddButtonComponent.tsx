import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./AddButtonComponent.css";

export interface AddButtonComponentProps {
    iconColor: string,
    columnName: string,
    buttonId?: number
}

export default function AddButtonComponent(props: AddButtonComponentProps){
    const buttonStyles = {
        backgroundColor: props.iconColor
    }

    // This will contain the logic for popping up the modal. Once the modal is filled, we push the data to the db & render in the column
    const addNewTask = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("Adding New Event");
    }

    return(
        <div className={"addButtonComponentContainer"} style={buttonStyles} onClick={addNewTask}>
            <FontAwesomeIcon icon={"plus"} fixedWidth={true}/>
        </div>
    );
}