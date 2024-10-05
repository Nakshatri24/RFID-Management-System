import React, { useState,useEffect } from 'react';
import '../components/User.css';
import Navbar from '../components/Navbar';
import axios from 'axios';
function Sample() {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[ps,setPs]=useState("");
    const[role,setRole]=useState("");
    const[data,setData]=useState([]);
    const[ui,setUi]=useState("");
    const[s,setS]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/api/data')
        .then(res=>res.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err));
    
      },[] )
    useEffect(() => {
        fetch('http://localhost:8081/api/stored')
        .then(res => res.json())
        .then(data => setS(data))
        .catch(err => console.error(err));
    }, []);
    
    function stored() {
        axios.get('http://localhost:8081/api/stored')
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => console.error(err));
    }
    function insertuser(){
        axios.post('http://localhost:8081/api/user',{id,name,ps,role})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        window.location.reload();
    }
    function del(){
        axios.post('http://localhost:8081/api/del',{ui})
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
                        <label for="userId">User ID:</label>
                        <input type="text" value={id} onChange={e=>setId(e.target.value)} style={{width:"90%"}}  id="userId" name="userId" required />
                    </div>
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input value={name} onChange={e=>setName(e.target.value)} style={{width:"90%"}} type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input value={ps} onChange={e=>setPs(e.target.value)} style={{width:"90%"}} type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label for="role">Role:</label>
                        <input value={role} onChange={e=>setRole(e.target.value)} style={{width:"90%"}} type="text" id="role" name="role" required />
                    </div>
                    <button className="buttons" type="submit" onClick={insertuser}>Add</button>
                </form>
                <form>
                    <div className="form-group">
                        <label for="userId">User ID:</label>
                        <input type="text" value={ui} onChange={e=>setUi(e.target.value)} style={{width:"90%"}} id="userId" name="userId" required />
                    </div>
                    <button class="buttons" type="submit" onClick={del}>Delete</button>
                </form>
                {/* <form action='/api/stored'>
    <button class="buttons" type="submit"> Run Stored Procedure</button>
</form> */}

                </div>
                    
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        
                    </tr>
                   
                </thead>
                <tbody>
                {data.map((d,i)=>(
                <tr key={i}>
                  <td style={{padding:"30px"}}>{d.user_id}</td>
                  <td style={{padding:"30px"}}>{d.user_name}</td>
                  <td style={{padding:"30px"}}>{d.password}</td>
                  <td style={{padding:"30px"}}>{d.role}</td>
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