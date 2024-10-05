import React, { useState,useEffect } from 'react';
import '../components/Time.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Sample() {
  const[si,setSi]=useState("");
  const[st,setSt]=useState("");
  const[et,setEt]=useState("");
  const[di,setDi]=useState("");
  const[data,setData]=useState([]);
  const[sid,setSid]=useState("");
  useEffect(()=>{
      fetch('http://localhost:8081/api/time')
      .then(res=>res.json())
      .then(data=> setData(data))
      .catch(err=>console.log(err));
  
    },[] )
  function inserttime(){
      axios.post('http://localhost:8081/api/inserttime',{si,st,et,di})
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
      window.location.reload();
  }
  function deletetime(){
      axios.post('http://localhost:8081/api/deletetime',{sid})
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
      <section className="time-management">
          <h2>Time Management</h2>
          <div className="addUserForm">
              <h3>Add New User</h3>
              <div  className="main">
              <form>
                  <div className="form-group">
                      <label for="scheduleId">Schedule ID:</label>
                      <input type="text" value={si} onChange={e=>setSi(e.target.value)} style={{width:"90%"}}  id="scheduleId" name="scheduleId" required />
                  </div>
                  <div className="form-group">
                      <label for="startTime">Start Time:</label>
                      <input value={st} onChange={e=>setSt(e.target.value)} style={{width:"90%"}} type="text" id="startTime" name="startTime" required />
                  </div>
                  <div className="form-group">
                      <label for="endTime">End Time:</label>
                      <input value={et} onChange={e=>setEt(e.target.value)} style={{width:"90%"}} type="text" id="endTime" name="endTime" required />
                  </div>
                  <div className="form-group">
                      <label for="tagId">Tag Id:</label>
                      <input value={di} onChange={e=>setDi(e.target.value)} style={{width:"90%"}} type="text" id="tagId" name="tagId" required />
                  </div>
                  <button className="buttons" type="submit" onClick={inserttime}>Add</button>
              </form>
              <form>
                  <div className="form-group">
                      <label for="scheduleId">Schedule ID:</label>
                      <input type="text" value={sid} onChange={e=>setSid(e.target.value)} style={{width:"90%"}} id="scheduleId" name="scheduleId" required />
                  </div>
                  <button class="buttons" type="submit" onClick={deletetime}>Delete</button>
              </form>
              </div>
                  
          </div>
          <table>
              <thead>
                  <tr>
                      <th>Schedule ID</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>tag ID</th>
                  </tr>
              </thead>
              <tbody>
              {data.map((d,i)=>(
              <tr key={i}>
                <td style={{padding:"30px"}}>{d.schedule_id}</td>
                <td style={{padding:"30px"}}>{d.start_time}</td>
                <td style={{padding:"30px"}}>{d.end_time}</td>
                <td style={{padding:"30px"}}>{d.tag_id}</td>
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