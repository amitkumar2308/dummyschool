// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Topper from './components/Topper';
import Footer from './components/Footer';
//import Videoes from './components/Videoes'
import PrincipalMessage from './components/PrincipalMessage';
import Award from './components/Award';
const App = () => {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div>
        <Navbar />
        <Home />
        <About/>
        <Topper/>
      

        <PrincipalMessage/>
        <Award/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
