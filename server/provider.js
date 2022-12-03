const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: '123Rabbit',
    database: 'infrarch',
})

app.get('/portfolio/images', (req, res) => {
    const ppImg = 'SELECT * FROM infrarch.portfolio;'
    db.query(ppImg, (error, result) => {
        res.send(result)
    })
})

app.get('/team/images', (req, res) => {
    const ppImg = 'SELECT * FROM infrarch.team_intro;'
    db.query(ppImg, (error, result) => {
        res.send(result)
    })
})

app.get('/client/testimonal', (req, res) => {
    const testimonal = 'SELECT * FROM infrarch.testimonals;'
    db.query(testimonal, (error, result) => {
        res.send(result)
    })
})

app.get('/house/plans', (req, res) => {
    const housePlans = 'SELECT * FROM infrarch.house_plans;'
    db.query(housePlans, (error, result) => {
        res.send(result)
    })
})

app.listen(5001, (err) => {
    if (!err) {
        console.log('provider server is running on port 5001')
    } else {
        console.log(err)
    }
})
