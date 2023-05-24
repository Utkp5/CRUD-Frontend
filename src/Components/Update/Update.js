import React, { useEffect, useState } from 'react'
import '../Home/Home.css';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {

  const {id} = useParams();

  const initialValue = {
    name: '',
    email: '',
    phoneno: '',
    favouriteplace: ''
  }
  
  const[update,setupdate] = useState(initialValue);
  const {name,email,phoneno,favouriteplace} = update; 



  const loadData = async() => {
    try { 
      
      const res = await axios.get(`https://wild-pink-coati-tie.cyclic.app/api/crud/get-single/${id}`);
      const final = res.data;
      setupdate(final);
      console.log(final);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  },[])


  const HandleUpdate = async() => {

    try {

      const res = await axios.put(`https://wild-pink-coati-tie.cyclic.app/api/crud/update/${id}`,update);
      const final = res.data;
      setupdate(final);
      console.log(final);

      if (final) {
        alert(`Updated Successfully`);
        window.location.href = `/`;
      }
      
    } catch (error) {
      
    }
  }

  const onValueChange = (e) => {
    console.log(e.target.value);
    setupdate({...update, [e.target.name]: e.target.value}) //[] -> key : value 
}


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
            </ul>
    
    
            <div className="burger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
    
          </nav>
        
          <div className='add_div'>
                <label className='add_label' for="name">Name:</label>
                <input type="text" id="name" name="name"   onChange={(e) => onValueChange(e)} value={name}/>
                
                <label className='add_label' for="email">Email:</label>
                <input type="email" id="email" name="email"   onChange={(e)  =>onValueChange(e)} value={email}/>
                
                <label className='add_label' for="phone">Phone Number:</label>
                <input type="number" id="phone" name="phoneno"   onChange={(e) =>onValueChange(e)} value={phoneno}/>
                
                <label className='add_label' for="place">Favourite Place:</label>
                <input type="text" id="place" name="favouriteplace"   onChange={(e) => onValueChange(e)} value={favouriteplace}/>
                
                <input type="submit" value="Submit" onClick={HandleUpdate}/>
            </div>




        </div>
  )
}

export default Update
