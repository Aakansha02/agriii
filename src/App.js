import React from 'react';
import Navbar from './components/Navbar';
import Home from './ages/Home';
import About from './ages/About';
import Footer from './components/Footer';
import ProductsGallery from './ages/ProductsDesc';
import { BrowserRouter as Router,Routes, Route ,Switch} from 'react-router-dom';
import './App.css';
import ContactUs from './components/contact';

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
    <ProductsGallery/>
    
    <Footer/>
    <ContactUs/>
    </Router>
    
  );
}

export default App;
