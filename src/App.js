import React from 'react';
import Navbar from './components/Navbar';
import Home from './ages/Home';
import About from './ages/About';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes, Route ,Switch} from 'react-router-dom';
import './App.css';
function App() {
  return (
   <Router>
    <>
    <Navbar/>

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    
  
    </Routes>
    
    </>
    
    <Footer/>
    </Router>
    
  );
}

export default App;
