import {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import "../App.css"; 


const TaskWrapper = ({
    task,
    onClick, 
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
        <div className={props.size? props.size + "  task-wrapper" : "task-wrapper"} onClick={onClick}>
            <div className="task">
                {/* ✅✔️☑️ */}
                <div className="task-details">
                    <span className="done">
                        {completed ? 
                        <FontAwesomeIcon icon={faCheckSquare}/> : 
                        <FontAwesomeIcon icon={faSquare} />
                        }
                    </span> 
                    <p 
                    className = {completed ? "strikethrough" : ""}
                    onClick={() => handleClick()}> 
                        {task.description}
                    </p>
                </div>
                
                <span className="due-date">
                    {/* {task.dueDate? task.dueDate : ""} */}
                    {task.dueDate }
                </span>
            </div>
            {/* <button> */}
            <FontAwesomeIcon 
                icon={faStar}
                className={favClick ? "add-to-fav-active" : "add-to-fav"} 
                onClick={() => handleFavClick()} 
            />
            {/* <button className={favClick ? "add-to-fav-active" : "add-to-fav"} onClick={() => handleFavClick()}>
                {favClick ? "🌟" : "⭐"}
                {/* 🌟 */}
            {/* </button>  */}
        </div>
    ); 
}


export default TaskWrapper; 