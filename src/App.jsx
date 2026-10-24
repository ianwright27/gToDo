import { useState, useEffect } from "react";
import LeftColumn from "./components/LeftColumn";
import TaskContext from "./components/TaskContext";
import "../src/App.css";


const App = () => {

  const [selectedTask, setSelectedTask] = useState(null); 
  const [closeTask, setCloseTask] = useState(false); 
  const [dueDate, setDueDate] = useState(null); 

  const handleTaskSelect = (task) => {
    console.log("task clicked: " + task); 
    setSelectedTask(task);  
  } 

  const handleCloseTask = () => {
    setSelectedTask(null); 
  }

  const handleChangeDueDate = (date) => {
    selectedTask.dueDate = date; 
    setDueDate(date); 
    console.log("from App:" + selectedTask.dueDate);
  }

  useEffect(()=>{
    document.title = "gToDo App"
  })

  useEffect(() => {
    console.log("selectedTask: " + selectedTask); 

    if (dueDate) setDueDate(d => null); 

  }, [selectedTask, dueDate]);

  return (
    <div className="app">
      <LeftColumn 
      selectedDueDate={dueDate} 
      onTaskSelect={(task) => handleTaskSelect(task)} 
      /> 

      {selectedTask ? (
          <TaskContext 
          onChangeDueDate={handleChangeDueDate} 
          onCloseTask={handleCloseTask} 
          task={selectedTask} />
        ) :  null }
    </div>
  )
}


export default App; 