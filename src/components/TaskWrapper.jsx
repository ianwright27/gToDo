import {useState} from 'react'; 
import "../App.css"; 


const TaskWrapper = ({
    task, 
    ...props
}) => {

    const [completed, setCompleted] = useState(false); 
    const [favClick, setFavClick] = useState(false); 

    const handleClick = () => {
        if (completed == true) {
            setCompleted(false); 
        } else {
            setCompleted(true); 
        }
        console.log("click")
    }

    const handleFavClick = () => {
        if (favClick == true) {
            setFavClick(false); 
        } else {
            setFavClick(true); 
        }
        // console.log("favClick: " + favClick); 
    }

    return (
        <div className={props.size? props.size + "  task-wrapper" : "task-wrapper"}>
            <div className="task">
                {/* ✅✔️☑️ */}
                <div className="task-details">
                    <span className="done">
                        {completed ? "✅" : ""}
                    </span> 
                    <p 
                    className = {completed ? "strikethrough" : ""}
                    onClick={() => handleClick()}> 
                        {task.description}
                    </p>
                </div>
                
                <span className="due-date">
                    {task.dueDate? task.dueDate : ""}
                </span>
            </div>
            <button className={favClick ? "add-to-fav-active" : "add-to-fav"} onClick={() => handleFavClick()}>
                {favClick ? "🌟" : "⭐"}
                {/* 🌟 */}
            </button>
        </div>
    ); 
}


export default TaskWrapper; 