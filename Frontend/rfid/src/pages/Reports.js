import React, { useState,useEffect } from 'react';
import '../components/Reports.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Sample() {
    const[ed,setEd]=useState("");
    const[et,setEt]=useState("");
    const[ts,setTs]=useState("");
    const[usi,setUsi]=useState("");
    const[ti,setTi]=useState("");
    const[tti,setTti]=useState("");
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/api/event')
        .then(res=>res.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err));
    
      },[] )
    function inst(){
        axios.post('http://localhost:8081/api/in',{ed,et,ts,usi,ti})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        window.location.reload();
    }
    function de(){
        axios.post('http://localhost:8081/api/de',{tti})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        window.location.reload();
    }
  return (
    <><header>
          <Navbar />
      </header><main>
              <section className="reports">
                  <h2>Reports</h2>
                  <div className="event">
                    <div className="main">
                    <form>
                    <div className="form-group">
                        <label for="eventId">Event ID:</label>
                        <input type="text" value={ed} onChange={e=>setEd(e.target.value)} style={{width:"90%"}}  id="eventId" name="eventId" required />
                    </div>
                    <div className="form-group">
                        <label for="eventType">Event Type</label>
                        <input value={et} onChange={e=>setEt(e.target.value)} style={{width:"90%"}} type="text" id="eventType" name="eventType" required />
                    </div>
                    <div className="form-group">
                        <label for="timeStamp">TimeStamp</label>
                        <input value={ts} onChange={e=>setTs(e.target.value)} style={{width:"90%"}} type="timeStamp" id="timeStamp" name="timeStamp" required />
                    </div>
                    <div className="form-group">
                        <label for="role">User Id</label>
                        <input value={usi} onChange={e=>setUsi(e.target.value)} style={{width:"90%"}} type="text" id="userId" name="userId" required />
                    </div>
                    <div className="form-group">
                        <label for="role">Tag Id</label>
                        <input value={ti} onChange={e=>setTi(e.target.value)} style={{width:"90%"}} type="text" id="tagId" name="tagId" required />
                    </div>
                    <button className="buttons" type="submit" onClick={inst}>Add</button>
                    </form>
                    <form>
                    <div className="form-group">
                        <label for="eventId">Event ID:</label>
                        <input type="text" value={tti} onChange={e=>setTti(e.target.value)} style={{width:"90%"}} id="eventId" name="eventId" required />
                    </div>
                    <button class="buttons" type="submit" onClick={de}>Delete</button>
                </form>
                    </div>
                  </div>
                  <div>
                      <h3>Event Logs Report</h3>
                      <table>
                          <thead>
                              <tr>
                                  <th>Event ID</th>
                                  <th>Event Type</th>
                                  <th>Timestamp</th>
                                  <th>User ID</th>
                                  <th>Tag ID</th>
                              </tr>
                          </thead>
                          <tbody>
                {data.map((d,i)=>(
                <tr key={i}>
                  <td style={{padding:"30px"}}>{d.event_id}</td>
                  <td style={{padding:"30px"}}>{d.event_type}</td>
                  <td style={{padding:"30px"}}>{d.time_stamp}</td>
                  <td style={{padding:"30px"}}>{d.user_id}</td>
                  <td style={{padding:"30px"}}>{d.tag_id}</td>
                </tr>
              )
              )}

                </tbody>
                      </table>
                  </div>
              </section>
          </main>
          <footer>
              <p>&copy; 2024 RFID Management System</p>
          </footer></>
  )
}

export default Sample