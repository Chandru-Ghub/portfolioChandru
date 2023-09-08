import { useEffect, useState } from 'react';
import About from './About';
import Ani from './Ani';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Top from './Top';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontEndProjects from './FrontEndProjects.';
import Project from './Project';
import Footer from './Footer';
function App() {
  return (

    <div>
      
    <div className="App">
          
          {/* <Top/> */}
          <BrowserRouter>
              <Navbar/>
          </BrowserRouter>
         
    </div>
    </div>
  );
}

export default App;
