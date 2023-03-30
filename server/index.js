require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const designs = require('./routes/designs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createPool({
  user: 'root',
  host: 'localhost',
  password: '123Rabbit',
  database: 'infrarch',
});

// routes
app.use('/api/designs', designs);
app.use('/api/members', members);
app.use('/api/designs', designs);
app.use('/api/designs', designs);

/*
app.get('/api/portfolio', (req, res) => {
  const ppImg = 'SELECT * FROM infrarch.portfolio;';
  db.query(ppImg, (error, result) => {
    res.send(result);
  });
});

app.get('/api/team_members', (req, res) => {
  const ppImg = 'SELECT * FROM infrarch.team_members;';
  db.query(ppImg, (error, result) => {
    res.send(result);
  });
});

app.get('/client/testimonal', (req, res) => {
  const testimonal = 'SELECT * FROM infrarch.testimonals;';
  db.query(testimonal, (error, result) => {
    res.send(result);
  });
});

app.get('/api/designs', (req, res) => {
  const houseDesigns = 'SELECT * FROM infrarch.house_design;';
  db.query(houseDesigns, (error, result) => {
    res.send(result);
  });
});
*/

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
