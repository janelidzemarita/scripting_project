import React from 'react';
import './App.css';
import Footer from './footer/footer'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup.js';
import Contact from './pages/contact';
import SignIn from './pages/signin';
import Abouti from './folder/abtus.jsx';
import Tours from "./pages/Tours";
import Camping from "./pages/Camping";


function App() {
  return (
  <Router>
    <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/homePage' element={<Home/>} />
                <Route path='/tours' element={<Tours/>} />
                <Route path='/camping' element={<Camping/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route path='/sign-in' element={<SignIn/>} />
            </Routes>
            <Footer/>
    </div>
  </Router>
);
}


export default App;
