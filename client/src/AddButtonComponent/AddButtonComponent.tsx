import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./AddButtonComponent.scss";

export interface AddButtonComponentProps {
    columnName: string
}

export default function AddButtonComponent(props: AddButtonComponentProps) {
    const buttonStyles = {
        backgroundColor: "#7D6BD9"
    }

    // This will contain the logic for popping up the modal. Once the modal is filled, we push the data to the db & render in the column
    const addNewTask = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("Adding New Event");
    }
    if (props.columnName === "To Do") {
        return (
            <div className="col">
                <div className="outer">
                    <div className="middle">
                        <div className="addButtonComponentContainer" style={buttonStyles} onClick={addNewTask}>
                            <FontAwesomeIcon icon={"plus"} fixedWidth={true} />
                        </div>
                    </div>
                </div>

            </div>

        );
    } else {
        return (<></>);
    }

}