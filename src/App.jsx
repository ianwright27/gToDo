import { useState } from "react";
import LeftColumn from "./components/LeftColumn";
import TaskContext from "./components/TaskContext";
import "../src/App.css";


const App = () => {

  const [contextOpen, setContextOpen] = useState(false); 
  const [isTaskClicked, setIsTaskClicked] = useState(false); 


  return (
    <div className="app">
      <LeftColumn>
        <TaskContext/>
      </LeftColumn>
    </div>
  )
}


export default App; 