const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('./database');

// Middleware //
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());
//app.use(express.json)());

// Routes //
app.get('/assignments/1', async(req, res) => {
    try {   
        res.json({
            assignment_name: "Test Assignment 1",
            assignment_description: "Endpoint Test",
            due_date: Date.now(),
            assignment_points: 50
        })
    } catch (err) {
        console.error(err);
    }
})

app.post('/assignments', async(req, res) => {
    try {   
        const new_assignment = req.body;
        console.log(new_assignment);
        res.json({
            success: true
        })
    } catch (err) {
        console.error(err);
    }
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})