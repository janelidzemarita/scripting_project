import NavBar from './navigationbar/NavBar'
import './App.css';
import Slider from "./slide/Slide.jsx";
import "./navigationbar/styles.css"
import Form from './navigationbar/Login.jsx'
import Footer from './footer/footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
       <NavBar/>
       <Slider/>
       <Footer/>
        <Routes>
            <Route  path="home" element={<Footer/>} />
            <Route  path="/navigationbar/Login.jsx" element={<Form/>} />
        </Routes>
    </div>
 </Router >
  );
}

export default App;
