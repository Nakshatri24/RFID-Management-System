import React, { useState,useEffect } from 'react';
import '../components/Tag.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Sample() {
  const[tid,setTid]=useState("");
    const[tt,setTt]=useState("");
    const[isd,setIsd]=useState("");
    const[data,setData]=useState([]);
    const[cs,setCs]=useState("");
    const[uid,setUid]=useState("");
    const[tag,setTag]=useState("");
    useEffect(()=>{
      fetch('http://localhost:8081/api/tag')
      .then(res=>res.json())
      .then(data=> setData(data))
      .catch(err=>console.log(err));
    },[] )
    function inserttag(){
        axios.post('http://localhost:8081/api/tag',{tid,tt,isd,cs,cs,uid})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        window.location.reload();
    }
    function dele(){
      axios.post('http://localhost:8081/api/dele',{tag})
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
      window.location.reload();
  }
  return (  
  <><header>
      <Navbar />
    </header>
    <main>
        <section id="tag-management">
          <h2>Tag Management</h2>
          <div id="addTagForm">
            <h3>Add New Tag</h3>
            <div className="main">
            <form>
              <div className="form-group">
                <label for="tagId">Tag ID:</label>
                <input type="text" value={tid} onChange={e => setTid(e.target.value)} style={{ width: "90%" }} id="tagId" name="tagId" required />
              </div>
              <div className="form-group">
                <label for="tagType">Tag Type:</label>
                <input type="text" value={tt} onChange={e => setTt(e.target.value)} style={{ width: "90%" }} id="tagtype" name="tagtype" required />
              </div>
              <div className="form-group">
                <label for="issueDate">Issue Date:</label>
                <input type="text" value={isd} onChange={e => setIsd(e.target.value)} style={{ width: "90%" }} id="issuedate" name="issuedate" required />
              </div>
              <div clasNames="form-group">
                <label for="currentStatus">Current Status:</label>
                <input type="text" value={cs} onChange={e => setCs(e.target.value)} style={{ width: "90%" }} id="currentstatus" name="currentstatus" required />
              </div>
              <div className="form-group">
                <label for="userId">User ID:</label>
                <input type="text" value={uid} onChange={e => setUid(e.target.value)} style={{ width: "90%" }} id="userId" name="userId" required />
              </div>
              <button className="buttons" type="submit" onClick={inserttag}>Add</button>
            </form>
            <form>
                    <div className="form-group">
                        <label for="tagId">Tag ID:</label>
                        <input type="text" value={tag} onChange={e=>setTag(e.target.value)} style={{width:"90%"}} id="tagid" name="tagid" required />
                    </div>
                    <button className="buttons" type="submit" onClick={dele}>Delete</button>
                </form>

            </div>
            
          </div>
          <table>
            <thead>
              <tr>
                <th>Tag ID</th>
                <th>Tag Type</th>
                <th>Issue Date</th>
                <th>Current Status</th>
                <th>User ID</th>  
              </tr>
            </thead>


            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td style={{ padding: "30px" }}>{d.tag_id}</td>
                  <td style={{ padding: "30px" }}>{d.tag_type}</td>
                  <td style={{ padding: "30px" }}>{d.issue_date}</td>
                  <td style={{ padding: "30px" }}>{d.current_status}</td>
                  <td style={{ padding: "30px" }}>{d.user_id}</td>


                </tr>
              )
              )}

            </tbody>
          </table>
        </section>
      </main><footer>
        <p>&copy; 2024 RFID Management System</p>
      </footer></>
  )
}

export default Sample