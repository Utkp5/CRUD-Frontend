import React from 'react'
import '../Home/Home.css';
import { NavLink } from 'react-router-dom';

function Add() {
  return (
    <div>
    
        <nav className="navbar">        
        <div className="logo"><p className="logo_p">Pandit Utkarsh</p></div>
        
        <ul className="nav-links"><li><p className="logo_p">Task Manager</p></li></ul>
    
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


            <div className='add_div'>
                <label className='add_label' for="name">Name:</label>
                <input type="text" id="name" name="name"  required />
                
                <label className='add_label' for="email">Email:</label>
                <input type="email" id="email" name="email"  required />
                
                <label className='add_label' for="phone">Phone Number:</label>
                <input type="number" id="phone" name="phone"  required />
                
                <label className='add_label' for="place">Favorite Place:</label>
                <input type="text" id="place" name="place"  required />
                
                <input type="submit" value="Submit" />
            </div>


    </div>
  )
}

export default Add
