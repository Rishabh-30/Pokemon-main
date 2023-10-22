import React from 'react'
import './Navbar.css'
import DarkMode from './../DarkMode/DarkMode';
import Policy from './../Pages/Policy';

function Navbar() {
  return (
    <header className="header">
      <div className="logo">App Name</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/policy">Policy</a>
        <DarkMode />
      </nav>
    </header>
  );
}

export default Navbar
