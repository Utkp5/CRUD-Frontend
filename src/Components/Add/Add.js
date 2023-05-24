import React, { useState } from 'react'
import '../Home/Home.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Add() {

    
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [phoneno,setphoneno] = useState('');
  const [favouriteplace,setfavouriteplace] = useState('');

 

  const Handleadd = async() => {

    try {

      const user = {name,email,phoneno,favouriteplace}

      if (!name || !email || !phoneno || !favouriteplace) {
        alert(`Bohot chalak.... bro U are very chalak fields can not be empty! `);        
      }
      else if (phoneno.length > 10 || phoneno.length < 10) {
        alert(`Wrong phone number`);
      }
      else if (!email.includes('@')) {
        alert(`Wrong Email typed!`);
      }

      const add = await axios.post("https://wild-pink-coati-tie.cyclic.app/api/crud/add",user);

      if (add) {
        console.log(add.data);
        alert('Data Inserted Successfully');
        window.location.href = "/";
      }     
      



      

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div>
    
        <nav className="navbar">        
        <div className="logo"><p className="logo_p">Pandit Utkarsh</p></div>
        
        <ul className="nav-links"><li><p className="logo_p">Task Manager</p></li></ul>
    
        <ul className="nav-links">
          <li><NavLink className="navlink" to="/">Home</NavLink></li>
          <li><NavLink className="navlink" to="/Add">Add</NavLink></li>
        </ul>
        
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>    
        </nav>


            <div className='add_div'>
                <label className='add_label' for="name">Name:</label>
                <input type="text" id="name" name="name"  required onChange={(e) => setname(e.target.value)}/>
                
                <label className='add_label' for="email">Email:</label>
                <input type="email" id="email" name="email"  required onChange={(e) => setemail(e.target.value)}/>
                
                <label className='add_label' for="phoneno">Phone Number:</label>
                <input type="number" id="phone" name="phoneno"  required onChange={(e) => setphoneno(e.target.value)}/>
                
                <label className='add_label' for="favouriteplace">Favourite Place:</label>
                <input type="text" id="place" name="favouriteplace"  required onChange={(e) => setfavouriteplace(e.target.value)}/>
                
                <input type="submit" value="Submit" onClick={Handleadd}/>
            </div>


    </div>
  )
}

export default Add
