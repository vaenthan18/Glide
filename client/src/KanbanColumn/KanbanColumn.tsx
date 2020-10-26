import React, { Component } from 'react';
import "./KanbanColumn.scss";
import { taskComponentProps } from '../Taskbox/TaskBox';
import TaskBox from "../Taskbox/TaskBox"
import AddButtonComponent from '../AddButtonComponent/AddButtonComponent';
import $ from 'jquery';

interface state {
    tasks: [{
        id: number,
        assignment_name: string,
        assignment_details: string,
        due_date: string,
        assignment_points: number,
        class_id: number,
        assignment_id: number,
        student_id: number,
        status: string,
        class_name: string,
        class_code: string,
        class_colour: string,
        total_points: number,
        teacher_id: number
    }]
};

interface props {
    groupName: string;
}

class KanbanColumn extends Component<props, state> {

    constructor(props: props) {
        super(props);
    
        this.state = {
            tasks: [{
                id: 1,
                assignment_name: "Task 1",
                assignment_details: "Assignment number one",
                due_date: "2020-03-17T04:00:00.000Z",
                assignment_points: 45,
                class_id: 3,
                assignment_id: 2,
                student_id: 1,
                status: "To Do",
                class_name: "Calculus",
                class_code: "qwerty",
                class_colour: "#000000",
                total_points: 50,
                teacher_id: 2
            }]
        };
      }

    componentDidMount() {
        this.getAssignments();
    }

    getAssignments() {
        $.ajax({
            url: `http://localhost:5000/students/1/assignments`, //TODO: update request URL
            type: "GET",
            success: (result) => {
                console.log("Hi:");
              console.log(result[0]);
              this.setState({
                tasks: result
              })
              return;
            },
            error: (error) => {
              alert('Unable to load assignments. Please try your request again')
              return;
            }
        })
    }
    render() {
        console.log(this.state);
        var tasks = this.state.tasks.map(task => (
            <li className='box' key={task.assignment_name}><TaskBox name={task.assignment_name} className={task.class_name} classColour={task.class_colour} dueDate={task.due_date} /></li>
        ));
        return (
            <div className="col" >
                <div className="row">
                    <h1 className='Header col-md-10'>{this.props.groupName} </h1>
                    <AddButtonComponent columnName={this.props.groupName} />
                </div>
                <ul className='column'>
                    {tasks.length ? tasks : <p>Default Markup</p>}
                </ul>
            </div>
        );
    }
}

export default KanbanColumn;