import React from 'react';
import './App.css';

import Form from './pages/Login.jsx'
import Footer from './footer/footer'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/Login.jsx';
import Contact from './pages/contact';

function App() {
  return (
  <Router>
    <div className="App">

            <Routes>
                <Route exact path='/'  element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route  path="/pages/Login.jsx" element={<Form/>} />
                <Route  path="home" element={<Footer/>} />
            </Routes>
        
    </div>
  </Router>
);
}


export default App;
