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
    database: 'infrarch-web',
})

app.get('/endpoint', (req, res) => {
    const sqlGet = 'some query here :D'
    db.query(sqlGet, (error, result) => {
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
