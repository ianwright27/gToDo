import { useState, useEffect } from "react"; 
import TaskWrapper from "./TaskWrapper";
import "../App.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


const TaskContext = ({
    task, 
    onCloseTask, 
    onChangeDueDate, 
    ...props
}) => {


    const [selectedTask, setSelectedTask] = useState({}); 
    const [steps, setSteps] = useState(null);
    // const [steps, setSteps] = useState(
    //     [
    //     {id: 0, description: "brush teeth", dueDate: ""}, 
    //     {id: 1, description: "wear pajamas", dueDate: ""}, 
    //     {id: 2, description: "read bible", dueDate: ""}, 
    //     ]
    // ); 

    
    useEffect(() => {
        console.log(": " + task); 
        setSteps(task.miniSteps); // by default 
        console.log("mini steps for this task: ", steps)
    }); 

    let taskDueDate = task.dueDate; // for displaying the due date in the task context modal 

    const [dueDate, setDueDate] = useState(null); 
    
    const handleAddSteps = (e) => {
        const step = document.getElementById("addStep").value; 

        if (e.keyCode == 13) {
            console.log("Enter pressed");
            setSteps(s => [...s, {id: s.length, description: step, dueDate: ""}]); 
            // clear the field 
            document.getElementById("addStep").value = ""; 
            task.miniSteps.push({id: steps.length, description: step, dueDate: ""}); 
        } 
    }

    const handleSetDueDate = (e) => {
        setDueDate(e.target.value); 
        task.dueDate = e.target.value; 
        onChangeDueDate(e.target.value); 
        document.getElementById("dueDateSelect").selectedIndex = 0; 
        taskDueDate = e.target.value; 

        setDueDate(d => null); 
    }

    return (
        <div className="right">
            <div className="close-btn" onClick={onCloseTask}>&times;</div>
            <div className="selectedTask">
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                &nbsp;
                {task.description} 
            </div>
            {/* <hr></hr> */}
            <ol className="mini-steps">
            {
            steps ? steps.map(s => 
                
                <TaskWrapper size="small-wrapper" key={s.id} task={s} />

                ) : <li>No mini-steps</li>
            }
            </ol>
            <input type="text" id="addStep" placeholder="Add mini-step" onKeyUp={(e) => handleAddSteps(e)}></input>
            <hr></hr>
            <br></br>
            <span className="due-date">Add a due date</span>
            <select id="dueDateSelect"  className="select-button" onChange={(e) => handleSetDueDate(e)} defaultValue={null}>
                <option value={null}> eg. 1 hour</option> 
                <option value="3 hours">3 hours</option> 
                <option value="Later Today">Later Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Next Week">Next Week</option>
            </select>
            <p className="set-due-date">
                Due: {taskDueDate ? taskDueDate : "not urgent"}</p>
        </div>
    ); 
}


export default TaskContext; 