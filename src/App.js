import NavBar from './navigationbar/NavBar'
import './App.css';
import Slider from "./slide/Slide.jsx";
import "./navigationbar/styles.css"
import Form from './navigationbar/Sign.jsx'
import Footer from './footer/footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
       <NavBar/>
       <Slider/>
       <Footer/>
        <Switch>
            <Route  path="home">
              <Footer/>
            </Route>
             <Route  path="/navigationbar/Sign.jsx">
              <Form/>
            </Route>
        </Switch>
    </div>
 </Router >
  );
}

export default App;
