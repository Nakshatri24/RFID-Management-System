import React from 'react';
import '../App.css';

function Navbar() {
  
  return (
    <div>
        <div className="navBar">
            <h1>RFID Management System</h1>
            <ul>
            <div className="colorr"><li><a href="/user">User</a></li></div>
            <div className="colorr"><li><a href="/report">Events</a></li></div>
            <div className="colorr"><li><a href="/tags">Tag</a></li></div>
            <div className="colorr"><li><a href="/location">Location</a></li></div>
            <div className="colorr"><li><a href="/time">Time Schedule</a></li></div>
            <div className="colorr"><li><a href="/login">Logout</a></li></div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
