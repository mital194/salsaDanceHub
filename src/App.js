import React from 'react';
import './App.css';
import h1 from './h1.jpeg'
import h2 from './h2.jpg'
function App() {
  return (
    <div className="home">
      <div className="header">
        <div className="menu">
           <a href="##" >Home</a> 
           <a href="##">Classes</a>
           <a href="##">Upcoming Events</a>
           <a href="##">About Us</a>
           <a href="##">Contact</a>
        </div>
      </div>
      <div className="body">
      <img src={h1} alt="cant display"></img>
      <img src={h2} alt="cant display"></img>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
