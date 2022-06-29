import "./styles.css"
import logo from './fds.jpg';
import { Link } from "react-router-dom";

 export default function NavBar(){
    return (
        <nav classname="nav">
           
          
            {/* Made by @godfather-coder */}
            <a href="/" calssname="site-name">Project</a>
            <ul classname="header"> 
                <img src={logo} alt="Logo" />
                <li classname = 'nav-elemnts'>
                    <a href ="Languages">Language</a>
                    <a href = "cart"> Cart</a>
                    <Link to="/navigationbar/Sign.jsx"> Sign up</Link>           
                </li>
             <button className="btnlg" herf="Sign">Log in</button>



            </ul>
        </nav>
        
    )
 }