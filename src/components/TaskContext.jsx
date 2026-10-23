import { useState } from "react"; 
import TaskWrapper from "./TaskWrapper";
import "../App.css"; 


const TaskContext = () => {

    const [selectedTask, setSelectedTask] = useState({}); 
    const [steps, setSteps] = useState([
        {id: 0, description: "brush teeth", dueDate: ""}, 
        {id: 1, description: "wear pajamas", dueDate: ""}, 
        {id: 2, description: "read bible", dueDate: ""}, 
    ]); 
    const [dueDate, setDueDate] = useState(""); 
    
    const handleAddSteps = (e) => {
        const step = document.getElementById("addStep").value; 

        if (e.keyCode == 13) {
            console.log("Enter pressed");
            setSteps(s => [...s, {id: s.length, description: step, dueDate: ""}]); 
            // clear the field 
            document.getElementById("addStep").value = ""; 
        } 
    }

    const handleSetDueDate = (e) => {
        setDueDate(e.target.value); 
    }

    return (
        <div className="right">
            <div className="close-btn">&times;</div>
            <div className="selectedTask">Task context would go here</div>
            <hr></hr>
            <ol className="mini-steps">
            {
        steps ? steps.map(s => 
            // <li key={s.id}> ● {s.task} </li>
            <TaskWrapper size="small-wrapper" key={s.id} task={s}></TaskWrapper> 
        ) : null
        
            }
            </ol>
            <input type="text" id="addStep" placeholder="Add mini-step" onKeyUp={(e) => handleAddSteps(e)}></input>
            <hr></hr>
            <span className="due-date">Add a due date</span>
            <select className="select-button" onChange={(e) => handleSetDueDate(e)}>
                <option>3 hours</option> 
                <option>Later Today</option>
                <option>Tomorrow</option>
                <option>Next Week</option>
            </select>
            <p className="set-due-date">
                Due: {dueDate ? dueDate : "not urgent"}</p>
        </div>
    ); 
}


export default TaskContext; 