import React, { useState,useEffect } from 'react';
import '../components/Loc.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Sample() {
    const[lid,setLid]=useState("");
    const[lname,setLname]=useState("");
    const[uis,setUis]=useState("");
    const[lidd,setLidd]=useState("");
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/api/location')
        .then(res=>res.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err));
    
      },[] )
    function insertlocation(){
        axios.post('http://localhost:8081/api/insertlocation',{lid,lname,uis})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        window.location.reload();
    }
    function deletelocation(){
        axios.post('http://localhost:8081/api/deletelocation',{lidd})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        window.location.reload();
    }


  return (
    <body>
    <header>
        <Navbar />
    </header>
    <main>
        <section className="user-management">
            <h2>User Management</h2>
            <div className="addUserForm">
                <h3>Add New User</h3>
                <div  className="main">
                <form>
                    <div className="form-group">
                        <label for="locationId">Location ID:</label>
                        <input type="text" value={lid} onChange={e=>setLid(e.target.value)} style={{width:"90%"}}  id="locationId" name="locationId" required />
                    </div>
                    <div className="form-group">
                        <label for="locationName">Location Name:</label>
                        <input value={lname} onChange={e=>setLname(e.target.value)} style={{width:"90%"}} type="text" id="locationName" name="locationName" required />
                    </div>
                    <div className="form-group">
                        <label for="userId">User ID:</label>
                        <input value={uis} onChange={e=>setUis(e.target.value)} style={{width:"90%"}} type="text" id="userId" name="userId" required />
                    </div>
                    <button className="buttons" type="submit" onClick={insertlocation}>Add</button>
                </form>
                <form>
                    <div className="form-group">
                        <label for="locationId">Location ID:</label>
                        <input type="text" value={lidd} onChange={e=>setLidd(e.target.value)} style={{width:"90%"}} id="locationId" name="locationId" required />
                    </div>
                    <button class="buttons" type="submit" onClick={deletelocation}>Delete</button>
                </form>
                </div>
                    
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Location ID</th>
                        <th>Location Name</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((d,i)=>(
                <tr key={i}>
                  <td style={{padding:"30px"}}>{d.location_id}</td>
                  <td style={{padding:"30px"}}>{d.location_name}</td>
                  <td style={{padding:"30px"}}>{d.user_id}</td>
                </tr>
              )
              )}

                </tbody>
            </table>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 RFID Management System</p>
    </footer>
</body>

  )
}

export default Sample