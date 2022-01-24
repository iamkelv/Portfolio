import React from 'react'
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Topbar from "./Components/Topbar.jsx/Topbar";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import './app.scss'
import { useState } from 'react';
import Menu from './Components/menu/Menu';
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
