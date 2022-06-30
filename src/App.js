import React from 'react';
import './App.css';
import Slider from "./slide/Slide.jsx";
import Form from './pages/Login.jsx'
import Footer from './footer/footer'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
  return (
  <Router>
    <div className="App">
       <Navbar/>
       <Slider/>
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route  path="/pages/Login.jsx" element={<Form/>} />
                <Route  path="home" element={<Footer/>} />
            </Routes>
        <Footer/>
    </div>
  </Router>
);
}


export default App;


