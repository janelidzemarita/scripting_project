import "./styles.css"
import logo from './fds.jpg';
 
 export default function NavBar(){
    return (
        <nav classname="nav">
           
           
            {/* Made by @godfather-coder */}
            <a href="/" calssname="site-name">Project</a>
            <ul classname="header"> 
                <img src={logo} alt="Logo" />
                <li classname = 'nav-elemnts'>
                    <a herf ="Languages">Language</a>
                    <a herf = "cart"> Cart</a>
                    <a herf ="Sign Up"> Sign Up</a>
                    <a href ="Logn in" > Log In</a>                    
                </li>



            </ul>
        </nav>
        
    )
 }