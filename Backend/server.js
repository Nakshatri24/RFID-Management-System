const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qazmlp123<>?',
    port:'3306',
    database: 'rfid'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/user', (req, res) => {
    const sql="insert into users values(?)";
    const values =[
        req.body.id,
        req.body.name,
        req.body.ps,
        req.body.role
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Edited FAILED");
        return res.json(data);
    })
});
app.post('/api/del', (req, res) => {
    const sql="delete from users where user_id=?";
    const values =[
        req.body.ui
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Deletion FAILED");
        return res.json(data);
    })
});
app.post('/api/upd', (req, res) => {
    const sql="update users set password=NULL where user_id=?";
    const values =[
        req.body.us
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Editing FAILED");
        return res.json(data);
    })
});

app.get('/api/tag', (req, res) => {
    const query = 'SELECT * FROM tags';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/tag', (req, res) => {
    const sql="insert into tags values(?)";
    const values =[
        req.body.tid,
        req.body.tt,
        req.body.isd,
        req.body.cs,
        req.body.uid
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Edited FAILED");
        return res.json(data);
    })
});
app.post('/api/dele', (req, res) => {
    const sql="delete from tags where tag_id=?";
    const values =[
        req.body.tag
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Deletion FAILED");
        return res.json(data);
    })
});

app.get('/api/event', (req, res) => {
    const query = 'SELECT * FROM events';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/in', (req, res) => {
    const sql="insert into events values(?)";
    const values =[
        req.body.ed,
        req.body.et,
        req.body.ts,
        req.body.usi,
        req.body.ti
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Edited FAILED");
        return res.json(data);
    })
});
app.post('/api/de', (req, res) => {
    const sql="delete from events where event_id=?";
    const values =[
        req.body.tti
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Deletion FAILED");
        return res.json(data);
    })
});

app.get('/api/location', (req, res) => {
    const query = 'SELECT * FROM location';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/insertlocation', (req, res) => {
    const sql="insert into location values(?)";
    const values =[
        req.body.lid,
        req.body.lname,
        req.body.uis
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Edited FAILED");
        return res.json(data);
    })
});
app.post('/api/deletelocation', (req, res) => {
    const sql="delete from location where location_id=?";
    const values =[
        req.body.lidd
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Deletion FAILED");
        return res.json(data);
    })
});

app.get('/api/time', (req, res) => {
    const query = 'SELECT * FROM time_schedule';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/inserttime', (req, res) => {
    const sql="insert into time_schedule values(?)";
    const values =[
        req.body.si,
        req.body.st,
        req.body.et,
        req.body.di
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Edited FAILED");
        return res.json(data);
    })
});
app.post('/api/deletetime', (req, res) => {
    const sql="delete from time_schedule where schedule_id=?";
    const values =[
        req.body.sid
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Deletion FAILED");
        return res.json(data);
    })
});

app.get("/api/stored", (req, res) => {
    const q = "CALL StoredProcedure()";
    connection.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Stored procedure FAILED");
        } else {
            console.log(data);
            return res.json(data);
        }
    });
});


app.listen(8081, () => {
    console.log("Server listening on port");
});