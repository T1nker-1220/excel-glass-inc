import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Excel Glass Inc.</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;