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

// ROUTES //

//Display an assignment
app.get('/assignments', async(req, res) => {
    try {   
        const all_assignments = await pool.query("SELECT * FROM assignments");
        res.json(all_assignments.rows);
    } catch (err) {
        console.error(err);
    }
})

app.post('/students', async(req, res) => {
    try{
        const { full_name, school, grade, total_points } = req.body;
        const new_student = await pool.query("INSERT INTO students (full_name, school, grade, total_points) VALUES ($1, $2, $3, $4) RETURNING *",
            [full_name, school, grade , total_points]
        );
        res.json(new_student.rows[0])
    } catch(err) {
        console.error(error);
    }
})

app.post('/teachers', async(req, res) => {
    try {
        const { full_name, school } = req.body;
        const new_teacher = await pool.query("INSERT INTO teachers (full_name, school) VALUES ($1, $2) RETURNING *",
            [full_name, school]
        );
        res.json(new_teacher.rows[0])
    } catch(err) {
        console.error(error);
    }
})

app.post('/teachers/:teacher_id/classes', async(req, res) => {
    try {
        const teacher_id = parseInt(req.params.teacher_id);
        const { class_name, class_code, class_colour, total_points } = req.body;
        const new_class = await pool.query("INSERT INTO classes (class_name, class_code, class_colour, total_points, teacher_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [class_name, class_code, class_colour, total_points, teacher_id]
        );
        res.json(new_class.rows[0])
    } catch(err) {
        console.error(err);
    }
})

app.post('/classes/:class_id/assignments', async(req, res) => {
    try {   
        const { name, details, due_date, points, class_id } = req.body;
        const new_assignment = await pool.query(
            "INSERT INTO assignments (assignment_name, assignment_details, due_date, assignment_points, class_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, details, due_date, points, class_id]
        );
        res.json(new_assignment.rows[0]);
    } catch (err) {
        console.error(err);
    }
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})