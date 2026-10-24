import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"; 
import { faSun } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

    const date = new Date(); 
    const fullDate = date.getDate() + "/" + 
    date.getMonth() + "/" + date.getFullYear(); 

    return (
        <div className="navbar">
            <div> <strong>Today</strong> <br></br> {fullDate}</div>
            <div className="menu">
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            </div>
        </div>
    ); 

}

export default NavBar; 