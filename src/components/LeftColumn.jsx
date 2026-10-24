
import {useState, useEffect} from "react";
import "../../src/App.css"; 
import NavBar from "./NavBar";
import TaskWrapper from "./TaskWrapper";


const LeftColumn = ({
    onTaskSelect,  
    selectedDueDate,
    ...props
}) => {
    console.log("selectedDueDate from leftcol: " + selectedDueDate);
    const tasks = [
        {
            id: 0, 
            description: "go to bed", 
            dueDate: null,
            miniSteps: [
                {id: 0, description: "brush teeth", dueDate: null}, 
                {id: 1, description: "wear pajamas", dueDate: null}, 
                {id: 2, description: "read bible", dueDate: null}, 
            ]
        }, 
        {
            id: 1, 
            description: "finish coding", 
            dueDate: null,
            miniSteps: [], 
        }, 
        {
            id: 2, 
            description: "pitch deck", 
            dueDate: null,
            miniSteps: [], 
        },
    ]; 

    const [todoList, setTodoList] = useState(tasks); 

    const handleTaskSelect = (task) => {
        console.log("task clicked: " + task); 
        if (selectedDueDate) {
            task.dueDate = selectedDueDate; 
            // set it in the specific item in the current todo list
            setTodoList(
                prevList => prevList.map(t => t.id === task.id ? task : t));
        } 
        console.log("from leftcol: " + task.dueDate); 
        onTaskSelect(task);  
    } 

    
    const handleAddTask = (e) => {
        const step = document.getElementById("addTask").value; 

        if (e.keyCode == 13) {
            // console.log("Enter pressed");
            setTodoList(s => [...s, {id: s.length, description: step, dueDate: "", miniSteps:[]}]); 
            // clear the field 
            document.getElementById("addTask").value = ""; 
        } 
    }

    return (
        <div className="left">
            <NavBar></NavBar>
            <div className="tasklist">
                {
                todoList.map(t => 
                <TaskWrapper onClick={() => handleTaskSelect(t)} key={t.id} task={t}></TaskWrapper> 
                )
                }
            </div>
            <div className="input-task">
                <input type="text" id="addTask" placeholder="Type a new task here..." onKeyUp={(e) => handleAddTask(e)}></input>
            </div>
        </div>
    )
}

export default LeftColumn; 