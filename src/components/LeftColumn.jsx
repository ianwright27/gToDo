import "../../src/App.css"; 
import NavBar from "./NavBar";
import TaskWrapper from "./TaskWrapper";


const LeftColumn = ({
    ...props
}) => {
    const tasks = [
        {
            id: 0, 
            description: "go to bed", 
            dueDate: null,
        }, 
        {
            id: 1, 
            description: "finish coding", 
            dueDate: "tomorrow",
        }, 
        {
            id: 2, 
            description: "pitch deck", 
            dueDate: "next week",
        },
    ]; 


    const handleTaskWrapperClick = () => {
        
    }

    return (
        <div className="left">
            <NavBar></NavBar>
            <div className="tasklist">
                {
                tasks.map(t => 
                <TaskWrapper onClick={() => handleTaskWrapperClick()} key={t.id} task={t}></TaskWrapper> 
                )
                }
            </div>
        </div>
    )
}

export default LeftColumn; 