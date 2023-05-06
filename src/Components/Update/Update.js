import React from 'react'
import '../Home/Home.css';
import { NavLink } from 'react-router-dom';

function Update() {
  return (
    <div>
    
        <nav className="navbar">
    
            <div className="logo"><p className="logo_p">Pandit Utkarsh</p></div>
    
    
            <ul className="nav-links">
              <li><p className="logo_p">Task Manager</p></li>
            </ul>
    
            <ul className="nav-links">
              <li><NavLink className="navlink" to="/">Home</NavLink></li>
              <li><NavLink className="navlink" to="/Add">Add</NavLink></li>
              <li><NavLink className="navlink" to="/Update">Update</NavLink></li>
            </ul>
    
    
            <div className="burger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
    
          </nav>
        
        </div>
  )
}

export default Update
