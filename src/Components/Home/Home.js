import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Home() {

  const [display,setdisplay] = useState([]);

  const displayData = async() => {

    try {

      const res = await axios.get("https://wild-pink-coati-tie.cyclic.app/api/crud/get-all");
      console.log(res);
      const final = res.data;
      console.log(final);
      setdisplay(final);

      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    displayData()
  },[])

  const random = () => {
    displayData();
  }


  
  //delete
  const handleDelete = async(_id) => {

    try {

      // const {id}  = useParams();

      await axios.delete(`https://wild-pink-coati-tie.cyclic.app/api/crud/delete/${_id}`); 
      random();
      
    } catch (error) {
      console.log(error);
    }
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


      <div class="table-container">
       <table>
         <thead>
           <tr>
             <th>S.No</th>
             <th>Name</th>
             <th>Email</th>
             <th>Phone No.</th>
             <th>Favourite Place</th>
             <th>Operations</th>
           </tr>
         </thead>
         <tbody>
           {
             display.map((dis,index) => {
               return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{dis.name}</td>
                    <td>{dis.email}</td>
                    <td>{dis.phoneno}</td>
                    <td>{dis.favouriteplace}</td>
                    <button className="btn btn_upd" onClick={() => window.location.href = "/Update/:" + dis._id}>Update</button> <button className="btn btn_del" onClick={() => handleDelete(dis._id)}>Delete</button>
                </tr>
               )
             })             
            }        
         </tbody>
       </table>
       </div>

  </div>
  );
}

export default Home;
