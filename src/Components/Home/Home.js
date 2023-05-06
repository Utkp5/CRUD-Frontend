import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
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
           <tr>
             <td>Data 1</td>
             <td>Data 2</td>
             <td>Data 3</td>
             <td>Data 4</td>
             <td>Data 5</td>
             <button className="btn btn_upd">Update</button> <button className="btn btn_del">Delete</button>
           </tr>
           <tr>
             <td>Data 1</td>
             <td>Data 2</td>
             <td>Data 3</td>
             <td>Data 4</td>
             <td>Data 5</td>
           </tr>
           <tr>
             <td>Data 1</td>
             <td>Data 2</td>
             <td>Data 3</td>
             <td>Data 4</td>
             <td>Data 5</td>
           </tr>
         </tbody>
       </table>
       </div>

  </div>
  );
}

export default Home;
