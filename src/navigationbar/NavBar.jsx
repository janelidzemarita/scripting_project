import "./styles.css"
import logo from './fds.jpg';
import {Link, Route} from "react-router-dom";
import Form from "./Login";

 export default function NavBar(){
    return (
        <nav className="nav">
            {/* Made by @godfather-coder */}
            <a href="/" className="site-name">Travel Agency Name</a>
            <img src={logo} alt="Logo" />
            <ul className="header">
                <li className = 'nav-elements'>
                    <a href ="Languages">Language</a>
                    <a href = "cart"> Cart</a>
                    <Link to="/navigationbar/Sign.jsx"> Sign up</Link>           
                </li>
             <button className="btnlg" herf="Sign">Log in</button>
                {/*<Route  path="/navigationbar/Login.jsx" element={<Form/>} />*/}
            </ul>
        </nav>
        
    )
 }