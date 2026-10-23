import "../App.css"; 

const NavBar = () => {

    const date = new Date(); 
    const fullDate = date.getDate() + "/" + 
    date.getMonth() + "/" + date.getFullYear(); 

    return (
        <div className="navbar">
            <div> <strong>Today</strong> <br></br> {fullDate}</div>
            <div className="menu">⚙️</div>
        </div>
    ); 

}

export default NavBar; 